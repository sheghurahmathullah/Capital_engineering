import { sanityClient2 } from "@/lib/sanity";
import Categories from "@/components/blog/portfolio-categories";
import PortfolioList from "./portfolio-list";

export default async function Projects3() {
  try {
    const query = `*[_type == "post"] {
      _id,
      title,
      "slug": slug.current,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      categories[]->{
        _id,
        title
      }
    }`;

    const portfolioItems = await sanityClient2.fetch(
      query,
      {},
      {
        next: {
          revalidate: 10,
        },
      }
    );

    console.log("Fetched items:", portfolioItems);

    if (!portfolioItems || portfolioItems.length === 0) {
      return (
        <div className="portfolio-area-1 space overflow-hidden">
          <div className="container">
            <p>No portfolio items found in the database.</p>
          </div>
        </div>
      );
    }

    return (
      <div className="portfolio-area-1 space overflow-hidden">
        <div className="container">
          <Categories />
          <PortfolioList portfolioItems={portfolioItems} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching portfolio items:", error);
    return (
      <div className="portfolio-area-1 space overflow-hidden">
        <div className="container">
          <p>Error loading portfolio items. Please try again later.</p>
        </div>
      </div>
    );
  }
}
