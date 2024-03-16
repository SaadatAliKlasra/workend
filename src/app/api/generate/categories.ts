const categories = ["Restaurants", "Retail Stores", "Technology", "Healthcare", "Finance", "Construction", "Hospitality", "Education", "Automotive", "Real Estate", "Entertainment", "Fitness", "Consulting", "Manufacturing", "Transportation", "Food Services", "Fashion", "Travel", "Legal Services", "Marketing", "Insurance", "Media", "Beauty", "E-commerce", "Agriculture", "Architecture", "Energy", "Telecommunications", "Environmental Services", "Pharmaceuticals", "Event Planning", "Art and Design", "Non-profit", "Sports", "Home Services", "Publishing", "Software Development", "Engineering", "Interior Design", "Pet Services", "Waste Management", "Security Services", "Childcare", "Farming", "Logistics", "Cleaning Services", "Music", "Graphic Design", "Web Development", "Human Resources", "Social Services", "Renewable Energy", "Investment", "Biotechnology", "Law", "Retail", "Beverage", "Textile", "Jewelry", "Gaming", "Catering", "Forestry", "Toy", "Chemical", "Firearms", "Cosmetics", "Aerospace", "Nautical", "Robotics", "Nanotechnology", "Cannabis", "Tobacco", "Space Tourism", "Virtual Reality", "Cryptocurrency", "Sustainable Development", "Augmented Reality", "Wearable Technology", "Biometrics", "Alternative Energy", "Fitness Equipment", "Music Production", "Virtual Assistance", "Home Automation", "Food Trucks", "Fine Arts", "Antiques", "Sustainable Fashion", "DIY and Crafts", "Vintage Clothing", "Smart Home", "Online Learning", "Social Media Management", "Renovation", "Gardening", "Handmade Goods", "Cultural Experiences", "Personal Finance", "Meal Delivery", "Subscription Services", "Senior Care", "Home Security", "Blockchain", "Fashion Design", "Culinary Tours", "Outdoor Adventures", "Personal Training", "Self-defense Classes", "Freelancing Platform", "Language Learning", "Financial Planning", "Sustainable Agriculture", "Eco-friendly Products", "Peer-to-peer Lending", "Coworking Spaces", "Electric Vehicles", "Home Renovation", "Vintage Furniture", "Healthy Snacks", "Home Brewing", "Online Marketplace", "Experiential Travel", "Adventure Sports", "Homemade Crafts", "Sustainable Tourism", "EdTech", "Ethical Fashion", "Zero Waste Products", "Fitness Apparel", "Artisanal Food", "Green Energy Solutions", "Personalized Gifts", "Fair Trade Goods", "Remote Work Solutions", "Online Therapy", "Digital Marketing Agency", "Influencer Marketing", "Sustainable Living Products", "Secondhand Clothing", "Eco-friendly Cleaning Products", "Subscription Boxes", "Remote Learning Tools", "Virtual Events Platform", "Mental Health Services", "AI-driven Solutions", "Smart Cities Technology", "Renewable Energy Solutions", "Fitness Centers", "Yoga Studios", "Martial Arts Schools", "Dance Studios", "Gyms", "CrossFit Gyms", "Pilates Studios", "Spas", "Massage Therapy", "Wellness Retreats", "Holistic Health Practices", "Nutrition Coaching", "Sports Equipment Retail", "Athletic Apparel", "Sports Medicine", "Rehabilitation Centers", "Physical Therapy", "Chiropractic Services", "Sports Psychology", "Sports Performance Training", "Sports Facilities Management", "Fitness Technology", "Mindfulness Coaching", "Outdoor Recreation", "Adventure Tourism", "Extreme Sports", "Water Sports", "Mountain Guides", "Ski Resorts", "Surf Schools", "Scuba Diving Centers", "Hiking Tours", "Camping Gear Rentals", "Bike Shops", "Outdoor Equipment Retail", "Nature Tourism", "Wildlife Tours", "Eco-Tourism", "Safari Tours", "Botanical Gardens", "Zoos", "Aquariums", "Nature Reserves", "National Parks", "Environmental Conservation Organizations", "Outdoor Education Programs", "Adventure Travel Agencies", "Tour Operators", "Travel Agencies", "Travel Insurance", "Destination Management Companies", "Airport Transportation", "Hotel Management", "Hospitality Technology", "Vacation Rentals", "Bed and Breakfasts", "Hostels", "Resorts", "Luxury Hotels", "Boutique Hotels", "Hotel Booking Platforms", "Timeshare Companies", "Cruise Lines", "Event Venues", "Conference Centers", "Convention Services", "Wedding Planning", "Event Catering", "Event Decor", "Event Photography", "Event Entertainment", "Corporate Event Planning", "Trade Show Services", "Experiential Marketing", "Event Ticketing", "Event Staffing", "Event Technology", "Event Apps", "Virtual Events", "Hybrid Events", "Live Streaming Services", "Webinar Platforms", "Online Event Registration", "Event Analytics", "Event Security", "Event Production", "Audiovisual Services", "Lighting Design", "Stage Rental", "Tent Rental", "Event Furniture Rental", "Event Transportation", "Event Cleanup Services", "Event Planning Software", "Event Marketing", "Event Sponsorship", "Event Consulting", "Event Staffing Agencies", "Event Videography", "Event DJ Services", "Event Rentals", "Event Signage", "Event Printing Services", "Event Logistics", "Event Branding", "Event Registration Services", "Event Permitting", "Event Licensing", "Event Insurance", "Event Legal Services", "Event Technology Consulting", "Event Budgeting", "Event ROI Tracking", "Event Feedback Surveys", "Robotics Repair", "Astro-Tourism", "Urban Farming", "3D Printing Services", "Virtual Reality Arcades", "Cryptocurrency Consulting", "Space Tourism Agency", "Alternative Medicine Clinics", "Escape Room Facilities", "Haunted House Attractions", "Aquaponics Farming", "Sustainable Clothing Rentals", "Indoor Skydiving Centers", "Extreme Weather Gear Retail", "Biodegradable Packaging", "Drone Photography Services", "Personal Air Mobility", "Artificial Intelligence Solutions", "Vintage Record Stores", "Retro Arcade Bars", "Eco-Friendly Furniture", "Mobile Car Wash", "Tiny House Construction", "Dog Training Centers", "Cat Cafés", "Urban Gardening Services", "Cultural Immersion Experiences", "Virtual Language Learning", "Alpaca Farming", "Eco-Friendly Beauty Products", "Organic Baby Products", "Zero-Waste Grocery Stores", "Sustainable Fashion Subscription Boxes", "Carbon Offset Services", "Eco-Tourism Lodges", "Adventure Gear Subscription Boxes", "Sustainable Architecture Firms", "Eco-Friendly Home Cleaning", "Green Energy Consulting", "Eco-Friendly Transportation Services", "Hydroponic Farming Supplies", "Sustainable Travel Accessories", "Fair Trade Coffee Roasters", "Community Supported Agriculture", "Eco-Friendly Event Planning", "Renewable Energy Installers", "Permaculture Design", "Eco-Friendly Packaging Solutions", "Bamboo Products", "Upcycled Fashion", "Ethical Jewelry", "Sustainable Toy Manufacturing", "Solar Panel Installation", "Wind Turbine Maintenance", "Electric Bike Rentals", "Reusable Water Bottle Brands", "Carbon Neutral Shipping", "Ethical Cosmetics Brands", "Eco-Friendly Home Décor", "Recycled Paper Products", "Compostable Dinnerware", "Sustainable Urban Development", "Zero-Waste Lifestyle Coaching", "Eco-Friendly Cleaning Services", "Sustainable Catering", "Renewable Energy Education", "Green Building Materials", "Eco-Friendly Pest Control", "Fair Trade Clothing Brands", "Recycled Plastic Products", "Eco-Tourism Certification", "Ethical Chocolate Brands", "Sustainable Fishing Tours", "Eco-Friendly Yoga Mats", "Reforestation Projects", "Carbon Footprint Calculators", "Sustainable Surfboard Manufacturing", "Eco-Friendly Pet Products", "Organic Skincare Lines", "Ethical Fashion Marketplaces", "Recycled Fashion Accessories", "Eco-Friendly Book Publishing", "Sustainable Restaurant Certification", "Renewable Energy Investments", "Eco-Friendly Farming Practices", "Fair Trade Home Goods", "Recycled Tire Products", "Community Renewable Energy", "Eco-Friendly Fashion Design", "Sustainable Tourism Marketing", "Ethical Textile Manufacturing", "Eco-Friendly Office Supplies", "Green Architecture Design", "Sustainable Transportation Infrastructure", "Zero-Waste Grocery Delivery", "Eco-Friendly Laundry Services", "Recycled Jewelry Materials", "Eco-Friendly Music Festivals", "Ethical Leather Alternatives", "Sustainable Event Decor", "Renewable Energy Policy Advocacy", "Eco-Friendly Building Demolition", "Community Solar Projects", "Sustainable Packaging Design", "Ethical Advertising Agencies", "Recycled Art Supplies", "Eco-Friendly Camping Gear", "Sustainable Fashion Design Schools", "Fair Trade Wine Producers", "Recycled Building Materials", "Eco-Friendly Hair Salons", "Sustainable Fishing Gear", "Ethical Investment Funds", "Eco-Friendly Pet Adoption Centers", "Recycled Furniture Stores", "Sustainable Agriculture Research", "Fair Trade Tea Producers", "Eco-Friendly Wedding Planners", "Sustainable Tourism Training", "Ethical Bedding Brands", "Recycled Glassware", "Eco-Friendly Cooking Classes", "Sustainable Fashion Events", "Fair Trade Chocolate Shops", "Recycled Electronics Retail", "Eco-Friendly Baby Clothing", "Sustainable Travel Blogs", "Ethical Coffee Roasters", "Eco-Friendly Music Venues", "Sustainable Building Materials", "Fair Trade Artisan Markets", "Recycled Bike Shops", "Eco-Friendly Technology Startups", "Sustainable Food Trucks", "Ethical Home Goods", "Recycled Paper Stationery", "Eco-Friendly Furniture Restoration", "Sustainable Packaging Materials", "Fair Trade Clothing Rentals", "Recycled Textile Products", "Eco-Friendly Transportation Apps", "Sustainable Skincare Brands", "Ethical Jewelry Repair", "Recycled Plastic Furniture", "Eco-Friendly Fitness Apparel", "Sustainable Toy Libraries", "Fair Trade Coffeehouses", "Recycled Metal Art", "Eco-Friendly Event Spaces", "Sustainable Wine Bars", "Ethical Silk Production", "Recycled Tire Playground Equipment", "Eco-Friendly Tattoo Studios", "Sustainable Gift Wrapping Services", "Fair Trade Chocolate Tours", "Recycled Denim Products", "Eco-Friendly Catering Equipment", "Sustainable Coffee Shops", "Ethical Diamond Alternatives", "Recycled Plastic Bottle Crafts", "Eco-Friendly Painting Services", "Sustainable Pet Adoption Events", "Fair Trade Home Décor Stores", "Recycled Jewelry Design Workshops", "Eco-Friendly Bookstores", "Sustainable Event Waste Management", "Ethical Woodworking Studios", "Recycled Aluminum Products", "Eco-Friendly Lighting Design", "Sustainable Packaging Solutions", "Fair Trade Textile Manufacturing", "Recycled Paper Art", "Eco-Friendly Transportation Networks", "Sustainable Fashion Shows", "Ethical Soap Production", "Recycled Glass Jewelry", "Eco-Friendly Corporate Gifts", "Sustainable Tourism Apps", "Fair Trade Clothing Swaps", "Recycled Plastic Bottle Recycling Centers", "Eco-Friendly Plant Delivery", "Sustainable Toy Exchanges", "Ethical Candle Making", "Recycled Plastic Bag Alternatives", "Eco-Friendly Festival Food", "Sustainable Music Festivals", "Fair Trade Clothing Boutiques", "Recycled Jewelry Exhibitions", "Eco-Friendly Bike Rentals", "Sustainable Fashion Workshops", "Ethical Fashion Shows", "Recycled Paper Jewelry", "Eco-Friendly Party Supplies", "Sustainable Baby Showers", "Fair Trade Fashion Design", "Recycled Clothing Swaps", "Eco-Friendly Home Tours", "Sustainable Art Galleries", "Ethical Coffee Shops", "Recycled Metal Sculpture", "Eco-Friendly Pet Parties", "Sustainable Wedding Favors", "Fair Trade Coffee Plantations", "Recycled Plastic Art", "Eco-Friendly Clothing Swaps", "Sustainable Fashion Pop-ups", "Ethical Textile Design", "Recycled Glass Art", "Eco-Friendly Jewelry Making", "Sustainable Fashion Expos", "Fair Trade Clothing Exchanges", "Recycled Wood Furniture", "Eco-Friendly Art Supplies", "Sustainable Fashion Hackathons", "Ethical Fashion Boutiques", "Recycled Tire Garden Furniture", "Eco-Friendly Tech Startups", "Sustainable Fashion Trunk Shows", "Fair Trade Fashion Accessories", "Eco-Friendly Furniture Design", "Sustainable Fashion Incubators", "Recycled Jewelry Making Workshops", "Eco-Friendly Stationery", "Sustainable Fashion Consultancies", "Fair Trade Fashion Collaborations", "Recycled Textile Art", "Eco-Friendly Fashion Branding", "Sustainable Fashion Competitions", "Ethical Fashion Brands", "Recycled Tire Playground Design", "Eco-Friendly Tech Hubs", "Fair Trade Fashion Showrooms", "Recycled Jewelry Design Studios", "Eco-Friendly Clothing Rental", "Sustainable Fashion Co-working Spaces", "Ethical Fashion Incubators", "Eco-Friendly Fashion Retailers", "Sustainable Fashion Startups", "Fair Trade Fashion Boutiques", "Eco-Friendly Fashion Tradeshows", "Sustainable Fashion Week", "Ethical Fashion Symposiums", "Recycled Plastic Fashion Shows", "Eco-Friendly Clothing Exchanges", "Sustainable Fashion Forums", "Fair Trade Fashion Conferences", "Recycled Fashion Marketplaces", "Eco-Friendly Fashion Incubators", "Sustainable Fashion Technology", "Ethical Fashion Consultancies", "Eco-Friendly Fashion Workshops", "Fair Trade Fashion Partnerships",

  "software", "mobile apps", "web development", "artificial intelligence", "data analytics",
  "cybersecurity", "cloud computing", "IoT", "blockchain", "hardware",


  "online retail", "dropshipping", "subscription boxes", "marketplaces", "niche products",
  "handmade goods", "print-on-demand",

  "consulting", "coaching", "freelancing", "virtual assistance", "graphic design",
  "writing", "editing", "translation", "social media management", "marketing",


  "photography", "videography", "music production", "art", "interior design",
  "event planning", "custom crafts",

  "restaurant", "cafe", "food truck", "catering", "bakery",
  "specialty foods", "meal delivery", "coffee shop",

  "fitness", "personal training", "yoga", "nutrition", "massage therapy",
  "mental health counseling", "spa services", "natural products",


  "tutoring", "online courses", "test preparation", "language instruction",
  "educational resources", "workshops",

  "cleaning services", "home improvement", "landscaping", "pet care", "organization",
  "personal shopping", "interior decorating",


  "clothing", "accessories", "jewelry", "cosmetics", "hair salon", "nail salon",
  "personal styling", "makeup artistry",


  "green products", "renewable energy", "recycling", "upcycling", "eco-consulting",
  "sustainable fashion", "organic food",

  "travel", "entertainment", "real estate", "finance", "transportation",
  "automotive", "manufacturing",
  "3D printing", "virtual reality", "augmented reality", "robotics", "home automation",
  "biotechnology", "nanotechnology", "space technology", "cleantech", "edtech",

  "secondhand goods", "vintage clothing", "collectibles", "subscription services",
  "refurbished electronics", "e-sports", "gaming merchandise", "locally-sourced products",

  "academic editing", "genealogy research", "resume writing", "web accessibility",
  "transcription", "voice-over", "technical writing", "legal support", "grant writing",

  "podcasting", "animation", "illustration", "game development", "music licensing",
  "prop making", "costume design", "voice acting", "scriptwriting",

  "specialty drinks", "meal prep kits", "food tours", "private chef", "cooking classes",
  "pop-up restaurant", "food photography", "food blogging", "microbrewery",

  "meditation", "mindfulness coaching", "sleep consulting", "aromatherapy", "natural skincare",
  "mobile spa", "alternative therapies", "life coaching", "pet therapy",
  "music lessons", "after-school programs", "educational toys", "children's clothing",
  "childcare", "nanny services", "parenting classes", "educational apps",

  "house sitting", "plant care", "senior care", "errand running", "gift wrapping",
  "personal concierge", "closet organization", "handyman services",


  "streetwear", "athleisure", "plus-size fashion", "modest fashion", "customizable clothing",
  "handmade jewelry", "hair accessories", "shoe repair", "tailoring",


  "urban farming", "community gardens", "water conservation", "repair cafes",
  "fair trade products", "microfinance", "ethical investing", "social entrepreneurship",

  "pet products", "sports", "outdoor recreation", "financial planning", "travel planning",
  "event management", "public relations", "photography services",
  "online therapy", "telemedicine", "elderly tech support", "digital asset management",
  "website optimization", "SEO services", "remote IT support", "data visualization",
  "virtual event hosting",

  "craft supplies", "hobby-specific tools", "fandom merchandise", "rare books",
  "vintage home decor", "home brewing supplies", "pet accessories", "board game sales",
  "antique restoration",


  " appliance repair", "furniture restoration", "car detailing", "upholstery", "musical instrument repair",
  "bicycle repair", "computer repair", "clothing alterations", "locksmithing",


  "calligraphy", "custom stationery", "murals", "caricature drawing", "face painting",
  "balloon twisting", "henna art", "customized gifts", "content creation",

  "artisan chocolates", "gourmet popcorn", "exotic spices", "small-batch spirits",
  "international snacks", "tea blending", "coffee roasting", "craft soda", "pickling & preserves",

  "yoga accessories", "sound therapy", "cryotherapy", "float therapy", "herbal remedies",
  "non-toxic cleaning products", "personal development retreats", "aromatherapy diffusers",


  "career coaching", "language tutoring", "financial literacy classes", "skills workshops",
  "music lessons", "dance instruction", "coding bootcamps", "test prep services",
  "children's enrichment activities",

  "landscaping design", "smart home installation", "closet design", "holiday decorating",
  "furniture assembly", "house painting", "power washing", "gutter cleaning", "pool maintenance",


  "sustainable footwear", "ethical jewelry", "custom hats", "unique eyewear", "costume rentals",
  "vintage clothing restoration", "sneaker customization", "upcycled fashion",


  "nonprofit consulting", "urban gardening", "plastic reduction initiatives", "composting services",
  "charitable giving platforms", "animal welfare", "disaster relief", "environmental activism",
  "social justice initiatives",

  "Cybersecurity software", "AI-powered analytics", "VR/AR development",
  "Smart home devices", "Wearable technology", "Assistive technology",
  "Fintech solutions", "Blockchain applications", "Quantum computing research",
  "Educational technology (EdTech)",


  "Resale platforms", "Hyperlocal marketplaces", "Experiential retail",
  "Personalized product subscriptions", "Refurbished tech marketplace",
  "Collectible trading platforms", "Plant and gardening supplies",
  "Pet supplies and services", "Home brewing and fermentation kits",
  "DIY and craft kits",


  "Financial wellness coaching", "Professional organizing",
  "Social media content creation", "Web accessibility consulting",
  "Brand voice development", "Video editing and production",
  "Personal shopping and styling", "Elderly companionship services",
  "Travel planning for niche interests", "Event staffing and coordination",


  "Stock music and sound effects", "Digital illustration and asset packs",
  "Custom font design", "Voice-over talent", "Podcast editing and production",
  "3D modeling and animation", "Independent game development",
  "Children's book illustration", "ASMR content creation", "Ghostwriting services",


  "Vegan and plant-based cuisine", "Unique and regional flavors",
  "Gourmet meal kits", "Microbrewery", "Craft distillery",
  "Specialty coffee and tea", "Mobile food vendors",
  "Pop-up dining experiences", "Food waste reduction initiatives",
  "Culinary tourism experiences",


  "Holistic nutrition", "Personalized fitness plans", "Biohacking resources",
  "Sleep optimization consulting", "Mental health apps",
  "At-home fitness equipment", "Wearable health trackers",
  "Ayurvedic medicine and products", "Natural beauty and skincare",
  "Biophilic design services",


  "STEM-focused camps and programs", "Language learning for adults",
  "Online courses in niche skills", "Coding for kids",
  "Financial literacy education", "Tutoring marketplace",
  "Educational subscription boxes", "Curriculum development",
  "Standardized test prep", "Career transition coaching",


  "Home office setup and optimization", "Minimalist living consulting",
  "Pet grooming and training", "Plant care and styling",
  "Interior decorating for small spaces", "Home energy audits",
  "Personal errands and task services", "Laundry and dry-cleaning service",
  "Window cleaning services", "Moving and relocation services",


  "Eco-conscious fashion", "Adaptive clothing", "Modest wear",
  "Plus-size fashion", "Sustainable beauty products", "Men's grooming products",
  "On-demand beauty services", "Upcycled jewelry and accessories",
  "Custom clothing design", "Personal styling for special events",

  "Reusable product solutions", "Zero-waste grocery stores",
  "Carbon offset programs", "Sustainable clothing rental",
  "Electric vehicle charging infrastructure", "Environmental policy consulting",
  "Water conservation technology", "Community composting initiatives",
  "Corporate sustainability training", "Ethical consumerism platforms",
  "AgTech (agricultural technology)", "Bioinformatics", "Robotics for consumer use",
  "Educational assistive tech", "Home automation for efficiency", "Digital asset management",
  "Remote collaboration tools", "3D printing for specialty items",
  "Open-source software development", "Tech solutions for nonprofit sectors",

  "Micro-fulfillment centers", "Direct-to-consumer niche brands",
  "Livestream shopping experiences", "Rental services for appliances and tools",
  "Online thrift and consignment", "Virtual try-on technology",
  "Experiential pop-up stores", "Hyper-personalized product recommendations",
  "Subscription box curation", "Local artisanal marketplaces",


  "Mobile car detailing", "Elderly technology assistance", "Home staging services",
  "Social media auditing", "Reputation management", "Podcast production",
  "Grant writing for individuals", "DIY project consulting", "Travel planning for dietary needs",

  "Music therapy applications", "Short-form video creation", "DIY craft subscription kits",
  "Tabletop game design", "Interactive storytelling experiences", "Escape room design",
  "Art restoration services", "Custom pet portraits", "Event photography packages",


  "Ghost kitchens", "Cloud restaurants", "Regional spice blends", "Exotic produce delivery",
  "High-end pet treats", "Fermented food and beverages ", "Culinary classes for couples",
  "Food-themed subscription boxes", "Specialty baking supplies", "Edible gardening services",


  "At-home spa kits", "Sound healing experiences", "Nature therapy retreats",
  "Workplace wellness programs", "Fitness for chronic conditions",
  "Custom herbal blends", "Natural cleaning product lines", "Sleep hygiene products",
  "Meditation app development", "Sensory-friendly products",


  "Coding for adults", "Financial literacy for teens", "Creative writing workshops",
  "Microlearning platforms", "Career mentorship programs", "Skill-swap marketplaces",
  "Continuing education for seniors", "Foreign language conversational practice",
  "Soft-skills training", "DIY skills classes",


  "Custom closets and storage solutions", "Smart garden technology",
  "Pet-friendly home design", "Personal library curation", "Home theater setup",
  "Outdoor living space design", "Houseplant care services",
  "Professional gift wrapping", "Photo and memorabilia organization",

  "Adaptive clothing for specific needs", "Sustainable textiles",
  "Rental clothing for special occasions", "Footwear for health conditions",
  "Customizable footwear", "Gender-neutral clothing lines",
  "Modest wear for active lifestyles", "Jewelry made from recycled materials",
  "Tech-integrated accessories",

  "Energy-efficient home retrofits", "Clothing repair and mending",
  "Urban beekeeping", "Appliances for off-grid living", "Electric vehicle conversion services",
  "Food waste upcycling", "Financial support for environmental action",
  "Tiny house design and construction", "Disaster preparedness consulting",
  "Micro-volunteering platforms",
  // E-commerce & Products
  "Zero-waste online store",
  "Recycled materials marketplace",
  "Eco-friendly subscription boxes",
  "Upcycled clothing and accessories",
  "Natural and refillable cleaning products",
  "Bamboo products",
  "Compostable packaging solutions",
  "Pre-owned electronics",
  "Green energy consulting",
  "Composting service",
  "Sustainable landscaping",
  "Eco-friendly event planning",
  "Repair cafe",
  "Bicycle repair and sales",
  "Greywater systems installation",
  "Environmental education",

  "Urban farming",
  "Vegan and plant-based catering",
  "Eco-friendly cleaning service",
  "Solar panel installation and cleaning",
  "Electric vehicle (EV) charging station network",
  "Eco-tourism",
  "Sustainable clothing rental"
]

export default categories

