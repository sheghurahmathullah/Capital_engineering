"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioList({ portfolioItems }) {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "All";

  console.log("Portfolio Items:", portfolioItems);
  console.log("Current Category:", currentCategory);

  const filteredItems =
    currentCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => {
          console.log("Item categories:", item.categories);
          return item.categories?.some(
            (category) => category.title === currentCategory
          );
        });

  console.log("Filtered Items:", filteredItems);

  if (!filteredItems || filteredItems.length === 0) {
    return <p>No portfolio items found for this category.</p>;
  }

  return (
    <div className="row gy-40 gx-60 justify-content-center">
      {filteredItems.map((item) => (
        <div key={item._id} className="col-xl-4 col-lg-4 col-md-6">
          <div className="portfolio-wrap">
            {item.mainImage && (
              <img
                src={item.mainImage.asset.url}
                alt={item.title}
                style={{ width: "100%", height: "250px", borderRadius: "10px" }}
              />
            )}
            <h3>{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
