import { Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
    return (
      <header>
        <nav>
          <img src="./logo.svg" alt="Apple Logo" />

          <ul>
            {[
              { label: "Store" },
              { label: "Mac" },
              { label: "iPad" },
              { label: "iPhone" },
              { label: "Watch" },
              { label: "Vision" },
            ].map(({ label }) => (
              <li key={label}>
                <a href={label}>{label}</a>
              </li>
            ))}
          </ul>

          <div className="flex-center gap-3">
            <button>
              <Search />
            </button>
            <button>
              <ShoppingCart />
            </button>
          </div>
        </nav>
      </header>
    );
}
export default Navbar