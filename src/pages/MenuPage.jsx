import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { menuCategories, menuIntro, menuItems } from "../data/menuText";

const categoryKeyMap = {
  Pizzas: "pizzas",
  "Garlic bread": "garlic bread",
  Calzone: "calzone",
  "Fried chicken": "fried chicken",
  "Spicy wings": "spicy wings",
  Extras: "extras",
  "Bucket deals": "bucket deals",
  "Kids meal": "kids meal",
  "Pizza offer": "pizza offer",
  Burgers: "burgers",
  "Meal deals": "meal deals",
  Drinks: "drinks",
  Milkshakes: "milkshakes",
  Desserts: "desserts",
  "Chicken and chips": "chicken and chips",
  "Chicken strips": "chicken strips"
};

function toBaseName(name) {
  // Groups size variants like "10inch Margherita Pizza" under "Margherita Pizza"
  const base = name.replace(/^\d+\s*inch\s*/i, "").trim();

  // Data has a small inconsistency: "14inch Half And Half" (missing "Pizza")
  // should group with "Half And Half Pizza".
  if (/^half\s+and\s+half$/i.test(base)) return "Half And Half Pizza";

  return base;
}

function variantSortKey(name) {
  const m = name.match(/^(\d+)\s*inch\b/i);
  if (m) return Number(m[1]);
  return Number.POSITIVE_INFINITY;
}

function MenuPage() {
  const [query, setQuery] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Pizzas");
  const [catsOpen, setCatsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const [autoOpened, setAutoOpened] = useState(false);

  const navigate = useNavigate();
  const sidebarRef = useRef(null);

  const handleAdd = (itemName) => {
    navigate("/contact", {
      state: {
        selectedItem: itemName
      }
    });
  };

  const filtered = useMemo(() => {
    const lowered = query.toLowerCase();
    const categoryKey = categoryKeyMap[activeCategory];
    return menuItems.filter((item) => {
      const matchQuery =
        !lowered ||
        item.name.toLowerCase().includes(lowered) ||
        item.description.toLowerCase().includes(lowered) ||
        item.tags.toLowerCase().includes(lowered);
      const matchVeg = !vegOnly || item.tags.toLowerCase().includes("veg");
      const matchCategory = item.tags.toLowerCase().includes(categoryKey);
      return matchQuery && matchVeg && matchCategory;
    });
  }, [query, vegOnly, activeCategory]);

  const mobileGroups = useMemo(() => {
    const map = new Map();
    for (const item of filtered) {
      const base = toBaseName(item.name);
      const current = map.get(base) || { base, description: "", items: [] };
      if (!current.description && item.description) current.description = item.description;
      current.items.push(item);
      map.set(base, current);
    }

    return Array.from(map.values()).map((g) => ({
      ...g,
      items: [...g.items].sort((a, b) => {
        const ak = variantSortKey(a.name);
        const bk = variantSortKey(b.name);
        if (ak !== bk) return ak - bk;
        return a.name.localeCompare(b.name);
      })
    }));
  }, [filtered]);

  useEffect(() => {
    // Mobile UX: open first group by default (matches provided screenshot)
    if (!autoOpened && !openGroup && mobileGroups.length) {
      setOpenGroup(mobileGroups[0].base);
      setAutoOpened(true);
    }
  }, [autoOpened, openGroup, mobileGroups]);

  const scrollToMenuTop = () => {
    setCatsOpen(true);
    sidebarRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="menu-page-wrap">
      <header className="menu-hero">
        <div className="menu-hero-left">
          <div className="menu-cover-img" />
          <div className="menu-hero-meta">
            <h2>{menuIntro[0]}</h2>
            <p>{menuIntro[1]}</p>
            <p>{menuIntro[2]}</p>
            <div className="menu-stats">
              <div>
                <strong>5.0</strong>
                <span>2+ ratings</span>
              </div>
              <div>
                <strong>45 MINS</strong>
                <span>Delivery</span>
              </div>
              <div>
                <strong>15 MINS</strong>
                <span>Collection</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="menu-controls">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for dishes..."
          aria-label="Search for dishes"
        />
        <label>
          <input
            type="checkbox"
            checked={vegOnly}
            onChange={(e) => setVegOnly(e.target.checked)}
          />
          Veg Only
        </label>
        <button className="delivery-btn" type="button">
          Delivery
        </button>
      </div>

      <div className="menu-content">
        <aside className="menu-sidebar" ref={sidebarRef}>
          <button
            type="button"
            className="menu-cat-header mobile-only"
            onClick={() => setCatsOpen((v) => !v)}
            aria-expanded={catsOpen}
          >
            <span>{activeCategory}</span>
            <span className="menu-caret">{catsOpen ? "▴" : "▾"}</span>
          </button>

          <p className="desktop-only">Home/ Menu</p>
          <ul className={catsOpen ? "open" : ""}>
            {menuCategories.map((cat) => (
              <li key={cat}>
                <button
                  type="button"
                  className={cat === activeCategory ? "cat-active" : ""}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenGroup(null);
                    setAutoOpened(false);
                    setCatsOpen(false);
                  }}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <div className="menu-list">
          {/* Desktop list (existing layout) */}
          <div className="desktop-only">
            <h3>{activeCategory}</h3>
            {filtered.map((item) => (
              <article key={`${item.name}-${item.price}`} className="menu-row">
                <div className="menu-row-left">
                  <h4>
                    <span className={`diet-dot ${item.tags.includes("Veg") ? "veg" : "nonveg"}`} />
                    {item.name}
                  </h4>
                  {item.description ? <p>{item.description}</p> : null}
                  <strong>{item.price}</strong>
                </div>
                <div className="menu-row-right">
                  <button type="button" onClick={() => handleAdd(item.name)}>
                    Add
                  </button>
                  <small>{item.tags.includes("Customizable") ? "Customizable" : ""}</small>
                </div>
              </article>
            ))}
          </div>

          {/* Mobile layout (matches screenshot style) */}
          <div className="mobile-only menu-mobile">
            {mobileGroups.map((group) => {
              const isOpen = openGroup === group.base;
              return (
                <section key={group.base} className="menu-acc-group">
                  <button
                    type="button"
                    className="menu-acc-header"
                    onClick={() => setOpenGroup((v) => (v === group.base ? null : group.base))}
                    aria-expanded={isOpen}
                  >
                    <span className="menu-acc-title">
                      <strong>{group.base}</strong>
                      {group.description ? <small>{group.description}</small> : null}
                    </span>
                    <span className="menu-caret">{isOpen ? "▴" : "▾"}</span>
                  </button>

                  {isOpen ? (
                    <div className="menu-acc-panel">
                      {group.items.map((item) => (
                        <div key={`${item.name}-${item.price}`} className="menu-acc-item">
                          <div className="menu-acc-left">
                            <div className="menu-acc-name">
                              <span
                                className={`diet-dot ${item.tags.includes("Veg") ? "veg" : "nonveg"}`}
                              />
                              <span>{item.name}</span>
                            </div>
                            <div className="menu-acc-price">{item.price}</div>
                          </div>

                          <div className="menu-acc-right">
                            <button type="button" onClick={() => handleAdd(item.name)}>
                              Add
                            </button>
                            {item.tags.includes("Customizable") ? (
                              <small>Customizable</small>
                            ) : (
                              <small>&nbsp;</small>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </section>
              );
            })}

            <button type="button" className="menu-view-menu" onClick={scrollToMenuTop}>
              VIEW MENU
            </button>
          </div>
        </div>
      </div>

      <div className="section-center">
        <Link className="cta-btn" to="/contact">
          Order from Contact Page
        </Link>
      </div>
    </section>
  );
}

export default MenuPage;
