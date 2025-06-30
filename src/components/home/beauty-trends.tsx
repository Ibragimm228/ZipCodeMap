export const BeautyTrends = () => {
  const trends = [
    {
      title: 'Zip Code Map',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/ZIP_code_zones.png',
      description: "Detailed Zip Code Prefix Map with US Zip Codes Lookup by State and City",
      category: 'Maps',
      date: 'July 23, 2017',
      excerpt: 'Zip Code Map, US Zip Codes Lookup by State and City File:ZIP Code zones.svg Wikimedia Commons Printable ZIP Code Maps Free Download Map With Zip Codes Texas | Capitoltheatreofgreeneville Printable ZIP Code Maps Free Download Map Of Zip Codes | Northcountrylittles Detailed Zip Code Prefix Map Florida Zip Codes Map, […]'
    },
    {
      title: 'Houston Zip Code Map',
      image: 'https://photo.houstonproperties.com/neighborhoods/houston-zip-code-map.jpg',
      description: 'Houston Texas Zip Code Map with complete Harris County coverage',
      category: 'City Maps',
      date: 'July 23, 2017',
      excerpt: 'Houston Texas Zip Code Map | HoustonProperties Houston Zip Code Map Free Zip Code Map Houston Zip Code Map Houston Zip Codes: List and Map Houston Zip Code Map Printable. Map. Get Free Image About World Maps Need zip code map please (Houston: zip codes, best, map of Houston Zip Codes Harris County, TX Zip […]'
    },
    {
      title: 'Fort Worth Zip Code Map',
      image: 'https://www.maxleaman.com/mortgage-resources/wp-content/uploads/2011/07/Fort-Worth-Zip-Code-Map.png',
      description: 'Ft. Worth Zipcode Map with DFW area coverage and boundaries',
      category: 'City Maps',
      date: 'July 23, 2017',
      excerpt: 'Ft. Worth Zipcode Map Fort Worth Zip Code Map Ft Worth Zipcode Search the MapTechnica Printable Map Catalog :: MapTechnica Dallas Ft. Worth Zipcode Map DFW Zip Code Map DFW Zipcode Map Search the MapTechnica Printable Map Catalog :: MapTechnica Fort Worth, TX Zip Codes Tarrant County Zip Code Boundary Map Search DFW homes by […]'
    },
  ];

  return (
    <section className="py-16 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Latest Zip Code Trends
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay ahead of the curve with our coverage of the latest zip code mapping trends and insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trends.map((trend, index) => (
            <div key={index} className="group relative">
              <div className="relative h-80 w-full rounded-xl overflow-hidden bg-gray-200">
                <img
                  src={trend.image}
                  alt={trend.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-110 w-full h-full"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block px-3 py-1 bg-gray-600 rounded-full text-sm">
                      {trend.category}
                    </span>
                    <span className="text-gray-300 text-sm">{trend.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{trend.title}</h3>
                  <p className="text-gray-200 mb-3">{trend.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};