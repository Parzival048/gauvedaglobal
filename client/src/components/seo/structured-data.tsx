import { useEffect } from "react";

interface StructuredDataProps {
  type: "organization" | "localBusiness" | "products";
}

export function StructuredData({ type }: StructuredDataProps) {
  useEffect(() => {
    const schemas: Record<string, object> = {
      organization: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Gauvedaglobal",
        "alternateName": "GAU VEDA GLOBAL LLP",
        "url": "https://gauvedaglobal.com",
        "logo": "https://gauvedaglobal.com/images/logo.webp",
        "description": "Premium organic cow dung manure for sustainable farming. 100% organic certified products trusted by thousands of farmers worldwide.",
        "email": "contact@gauvedaglobal.com",
        "telephone": "+91-77580-77875",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "SNO.112/1 NR. KHANDOBA MANDIR, PUNAWALE",
          "addressLocality": "PUNE CITY",
          "addressRegion": "MAHARASHTRA",
          "postalCode": "411033",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://www.facebook.com/gauvedaglobal",
          "https://www.instagram.com/gauvedaglobal",
          "https://www.linkedin.com/company/gauvedaglobal"
        ]
      },
      localBusiness: {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Gauvedaglobal",
        "image": "https://gauvedaglobal.com/images/logo.webp",
        "@id": "https://gauvedaglobal.com",
        "url": "https://gauvedaglobal.com",
        "telephone": "+91-77580-77875",
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "SNO.112/1 NR. KHANDOBA MANDIR, PUNAWALE",
          "addressLocality": "PUNE CITY",
          "addressRegion": "MAHARASHTRA",
          "postalCode": "411033",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 18.6298,
          "longitude": 73.7997
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "150"
        }
      },
      products: {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "Product",
            "name": "Premium Cow Dung Manure",
            "image": "https://gauvedaglobal.com/images/cow-dung-manure.webp",
            "description": "100% organic cow dung manure, naturally composted for optimal soil enrichment. Chemical-free, rich in nutrients, and improves soil structure.",
            "brand": {
              "@type": "Brand",
              "name": "Gauvedaglobal"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": "500",
              "highPrice": "5000",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "75"
            }
          },
          {
            "@type": "Product",
            "name": "Cow Dung Logs",
            "image": "https://gauvedaglobal.com/images/cow-dung-logs.webp",
            "description": "Dried cow dung logs, perfect for traditional fuel and organic gardening. Eco-friendly, long burning, and natural.",
            "brand": {
              "@type": "Brand",
              "name": "Gauvedaglobal"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": "300",
              "highPrice": "3000",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "50"
            }
          },
          {
            "@type": "Product",
            "name": "Organic Fertilizer",
            "image": "https://gauvedaglobal.com/images/organic-fertilizer.webp",
            "description": "Premium quality organic fertilizer for sustainable farming practices. USDA Certified, high yield, and eco-sustainable.",
            "brand": {
              "@type": "Brand",
              "name": "Gauvedaglobal"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": "600",
              "highPrice": "6000",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "60"
            }
          }
        ]
      }
    };

    const schema = schemas[type];
    if (!schema) return;

    const scriptId = `structured-data-${type}`;
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement;

    if (!scriptElement) {
      scriptElement = document.createElement("script");
      scriptElement.id = scriptId;
      scriptElement.type = "application/ld+json";
      document.head.appendChild(scriptElement);
    }

    scriptElement.textContent = JSON.stringify(schema);

    return () => {
      const element = document.getElementById(scriptId);
      if (element) {
        element.remove();
      }
    };
  }, [type]);

  return null;
}
