export interface LocationData {
  city: string;
  slug: string;
  region: string;
  pronunciation?: string;

  colors: {
    primary: string;
    secondary: string;
    gradient: string;
  };

  hero: {
    tagline: string;
    headline: string;
    subheadline: string;
    image: string;
  };

  identity: {
    headline: string;
    description: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
  };

  landmarks: Array<{
    name: string;
    description: string;
  }>;

  painPoints: Array<{
    headline: string;
    description: string;
  }>;

  services: Array<{
    title: string;
    description: string;
    href: string;
  }>;

  topIndustries: string[];

  nearbyAreas: string[];

  cta: {
    headline: string;
    subheadline: string;
  };

  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogUrl: string;
    geoLat: number;
    geoLng: number;
  };
}

const locationConfigs: Record<string, LocationData> = {
  conroe: {
    city: "Conroe",
    slug: "conroe",
    region: "Montgomery County",

    colors: {
      primary: "#2D6B4F",
      secondary: "#D4943A",
      gradient:
        "linear-gradient(135deg, rgba(45,107,79,0.7), rgba(212,148,58,0.4))",
    },

    hero: {
      tagline: "The Piney Woods",
      headline: "Conroe Is Growing. Your Business Should Too.",
      subheadline:
        "Lake Conroe weekends, Friday night football, and a downtown that's buzzing again. If your business isn't online, your competition is. We build platforms that match the pace of one of America's fastest-growing cities.",
      image: "/images/locations/conroe-hero.jpg",
    },

    identity: {
      headline: "Where the Pines Meet Progress",
      description:
        "Conroe isn't what people think it is anymore. What was once a quiet timber-and-oil town north of Houston is now the county seat of the fastest-growing county in Texas — and the growth isn't slowing down. New families are pouring in along I-45, the medical corridor is expanding, and downtown Conroe is in the middle of a genuine renaissance. Southern Star Brewing packed on a Saturday, the Crighton Theatre selling out shows, new restaurants opening on Main Street faster than people can keep up.\n\nBut growth cuts both ways. For every business that's thriving, there's another one getting buried by competition they didn't have two years ago. The old playbook — word of mouth, a sign on the road, maybe a Facebook page — isn't enough when three new competitors opened this quarter. Your neighbors are searching for you right now. The question is whether they find you or the other guy.",
      stats: [
        { value: "126,000+", label: "Population" },
        { value: "4.85%", label: "Annual Growth" },
        { value: "#1", label: "Houston Suburb for Growth" },
      ],
    },

    landmarks: [
      {
        name: "Lake Conroe",
        description:
          "22,000 acres of weekend escapes and waterfront businesses.",
      },
      {
        name: "Crighton Theatre",
        description:
          "Downtown's anchor since 1934 — still selling out shows.",
      },
      {
        name: "Southern Star Brewing",
        description: "First independent brewery in Montgomery County.",
      },
      {
        name: "Historic Downtown Conroe",
        description:
          "Where the oil boom built the streets and the new boom is filling them.",
      },
      {
        name: "Jones State Forest",
        description:
          "1,700 acres of pines in the middle of the fastest-growing county in Texas.",
      },
    ],

    painPoints: [
      {
        headline: "Booming Growth = New Competition Daily",
        description:
          "When three new businesses open every quarter in your niche, word of mouth isn't a strategy anymore. We build search-first platforms that make sure the growth works for you, not against you.",
      },
      {
        headline: "Old-School Marketing Isn't Enough Anymore",
        description:
          "Your sign on FM 105 works for the people who already know you. We build the digital presence that captures the thousands of new residents who don't — yet.",
      },
      {
        headline: "Seasonal Lake Tourism vs. Year-Round Revenue",
        description:
          "Lake Conroe fills your weekends March through October. We build marketing systems that keep customers coming through the quiet months too.",
      },
    ],

    services: [
      {
        title: "Custom Web Applications",
        description:
          "From Lake Conroe marinas to downtown retail — platforms built for how Conroe businesses actually work.",
        href: "/services/web-apps",
      },
      {
        title: "AI-Powered Tools",
        description:
          "Automated scheduling, smart follow-ups, and chatbots that handle the overflow when growth outpaces your team.",
        href: "/services/ai-tools",
      },
      {
        title: "Marketing & SEO",
        description:
          "Dominate 'near me' searches in the fastest-growing city in Montgomery County.",
        href: "/services/marketing",
      },
      {
        title: "eCommerce Solutions",
        description:
          "Sell online to the new residents before they even know you exist.",
        href: "/services/ecommerce",
      },
    ],

    topIndustries: [
      "Healthcare & Medical",
      "Contractors & Remodeling",
      "Restaurants & Food Service",
      "Professional Services",
      "HVAC & Home Services",
      "Auto & Detailing",
      "Lawn Care & Landscaping",
      "Cleaning & Pest Control",
    ],

    nearbyAreas: [
      "The Woodlands",
      "Willis",
      "Montgomery",
      "Cut and Shoot",
      "Shenandoah",
      "Oak Ridge North",
      "Magnolia",
      "Spring",
    ],

    cta: {
      headline: "Your Conroe Neighbors Are Searching. Let Them Find You.",
      subheadline:
        "Custom platforms for the fastest-growing city in Texas. Let's make sure the growth works for your business.",
    },

    seo: {
      title: "Web Design & Marketing in Conroe, TX | Aeopic",
      description:
        "Custom web applications and marketing for Conroe businesses. Built for the fastest-growing city in Montgomery County — by people who know the difference between FM 105 and downtown.",
      keywords: [
        "web design Conroe TX",
        "marketing Conroe Texas",
        "SEO Conroe TX",
        "web development Conroe",
        "Conroe business marketing",
        "Montgomery County web design",
      ],
      ogUrl: "https://aeopic.com/locations/conroe",
      geoLat: 30.3119,
      geoLng: -95.4561,
    },
  },

  "college-station": {
    city: "College Station",
    slug: "college-station",
    region: "Brazos Valley",

    colors: {
      primary: "#8C2332",
      secondary: "#C8A951",
      gradient:
        "linear-gradient(135deg, rgba(140,35,50,0.7), rgba(200,169,81,0.4))",
    },

    hero: {
      tagline: "Aggieland",
      headline: "Built for College Station. Built to Grow With You.",
      subheadline:
        "72,000 students. 131,000 residents. National chains on every corner. Your business deserves a platform as strong as the community behind it.",
      image: "/images/locations/college-station-hero.jpg",
    },

    identity: {
      headline: "More Than a College Town",
      description:
        "College Station is a contradiction that works. It's a city built around a university, but it hasn't been 'just a college town' for years. The population has nearly doubled in a decade. The research corridor is drawing biotech, defense, and aerospace companies. And the food scene — from Northgate to Wellborn Road — would hold its own against cities twice this size.\n\nBut the 40,000-student swing between fall and summer creates a business environment unlike anywhere else in Texas. The businesses that thrive here have figured out how to ride both cycles — capturing Aggie loyalty during the school year and building enough local and regional reach to stay strong through the summer. That's not a marketing problem you solve with a template.",
      stats: [
        { value: "131,000+", label: "Population" },
        { value: "72,500", label: "Students" },
        { value: "#3", label: "US Boomtown" },
      ],
    },

    landmarks: [
      {
        name: "Kyle Field",
        description:
          "102,000 seats. Loudest stadium in the country on game day.",
      },
      {
        name: "Northgate District",
        description:
          "Where every Aggie's first off-campus story starts.",
      },
      {
        name: "Century Tree",
        description: "If you've walked under it, you know.",
      },
      {
        name: "Bush Presidential Library",
        description: "The anchor of the university's west campus.",
      },
      {
        name: "Aggie Park",
        description:
          "The newest landmark that's already part of the tradition.",
      },
    ],

    painPoints: [
      {
        headline: "The 40-50% Summer Revenue Drop",
        description:
          "When students leave, half your foot traffic goes with them. We build marketing systems that capture regional customers and keep revenue steady through May-August.",
      },
      {
        headline: "The Aggie Network Gatekeeping",
        description:
          "If you're not connected to the A&M network, you're starting from behind. We build the digital presence that levels the playing field — search doesn't care about your ring.",
      },
      {
        headline: "National Chains vs. Local Identity",
        description:
          "Every franchise is here now. Your advantage is that you're FROM here. We make sure that story gets told in every search result, every page, every ad.",
      },
    ],

    services: [
      {
        title: "Custom Web Applications",
        description:
          "From Northgate restaurants to off-campus startups — platforms built for the Aggieland business cycle.",
        href: "/services/web-apps",
      },
      {
        title: "AI-Powered Tools",
        description:
          "Smart booking, automated follow-ups, and AI assistants that handle the game-day rush and the summer quiet.",
        href: "/services/ai-tools",
      },
      {
        title: "Marketing & SEO",
        description:
          "Capture both the Aggie audience and the growing local market that doesn't care about football season.",
        href: "/services/marketing",
      },
      {
        title: "eCommerce Solutions",
        description:
          "Sell to Aggies before they graduate and to the community that stays.",
        href: "/services/ecommerce",
      },
    ],

    topIndustries: [
      "HVAC & Home Services",
      "Restaurants & Food Service",
      "Medical & Dental",
      "Real Estate",
      "Auto & Detailing",
      "Contractors & Remodeling",
      "Lawn Care & Landscaping",
      "Law Offices",
    ],

    nearbyAreas: [
      "Bryan",
      "Wellborn",
      "Millican",
      "Navasota",
      "Hearne",
      "Caldwell",
      "Madisonville",
      "Brenham",
    ],

    cta: {
      headline: "Ready to Stand Out in Aggieland?",
      subheadline:
        "Your business has the local advantage. Let's make sure the internet knows it.",
    },

    seo: {
      title: "Web Design & Marketing in College Station, TX | Aeopic",
      description:
        "Custom web applications and marketing for College Station businesses. Built for the Aggieland business cycle — game day to summer, we keep your revenue growing.",
      keywords: [
        "web design College Station TX",
        "marketing College Station Texas",
        "SEO College Station TX",
        "College Station web development",
        "Aggieland business marketing",
        "Brazos Valley web design",
      ],
      ogUrl: "https://aeopic.com/locations/college-station",
      geoLat: 30.628,
      geoLng: -96.3344,
    },
  },

  "montgomery-county": {
    city: "Montgomery County",
    slug: "montgomery-county",
    region: "Greater Houston",

    colors: {
      primary: "#1B4332",
      secondary: "#4A90A4",
      gradient:
        "linear-gradient(135deg, rgba(27,67,50,0.7), rgba(74,144,164,0.4))",
    },

    hero: {
      tagline: "Where the Pines Meet Progress",
      headline: "Montgomery County's Growth Needs More Than a Template.",
      subheadline:
        "781,000 residents across everything from Lake Conroe cabins to Woodlands corporate offices. Your business needs a platform that works for your corner of the county.",
      image: "/images/locations/montgomery-county-hero.jpg",
    },

    identity: {
      headline: "One County, Many Identities",
      description:
        "Montgomery County isn't one place — it's a dozen places that share a county line. The Woodlands is a master-planned corporate corridor. Conroe is a boomtown. Magnolia is ranch country going suburban. Willis is the quiet north. And the unincorporated areas along the lake and the forest have their own identity entirely.\n\nThat diversity is what makes marketing here so complicated. A business in south Montgomery County is competing with Woodlands-level sophistication. A business in the north is trying to be found by people who don't even know what city they're technically in. The county is growing at a top-10 national pace, but that growth isn't distributed evenly — and neither are the opportunities.",
      stats: [
        { value: "781,000+", label: "Population" },
        { value: "Top 10", label: "Fastest-Growing US County" },
        { value: "$97K", label: "Median Household Income" },
      ],
    },

    landmarks: [
      {
        name: "Lake Conroe",
        description:
          "The recreational heart of the county — 22,000 acres of lakefront business.",
      },
      {
        name: "Sam Houston National Forest",
        description:
          "163,000 acres of pines that define the county's character.",
      },
      {
        name: "Historic Montgomery",
        description:
          "Birthplace of the Texas flag. Population: small. Pride: immense.",
      },
      {
        name: "Texas Renaissance Festival",
        description:
          "The largest renaissance festival in the nation. Right here in Todd Mission.",
      },
      {
        name: "The Lone Star Trail",
        description:
          "28 miles of trail connecting the forest to the county's fastest-growing communities.",
      },
    ],

    painPoints: [
      {
        headline: "South County Dominates Search",
        description:
          "The Woodlands absorbs most of Montgomery County's search traffic. If your business is in Conroe, Willis, or Magnolia, you're invisible unless you fight for your own visibility. We build SEO strategies that put your specific area on the map.",
      },
      {
        headline: "Sub-Area Identity Confusion",
        description:
          "Half the businesses in the county have addresses that confuse Google. Montgomery vs. Conroe vs. The Woodlands vs. unincorporated — we build location strategies that work no matter how the post office labels you.",
      },
      {
        headline: "Growth Creating Fierce Competition",
        description:
          "Top-10 growth nationally means every franchise and chain is planting a flag. Your local advantage only works if people can find you first.",
      },
    ],

    services: [
      {
        title: "Custom Web Applications",
        description:
          "From lakefront marinas to FM 1488 storefronts — platforms built for every corner of the county.",
        href: "/services/web-apps",
      },
      {
        title: "AI-Powered Tools",
        description:
          "Smart systems that handle the complexity of serving a county this diverse.",
        href: "/services/ai-tools",
      },
      {
        title: "Marketing & SEO",
        description:
          "Get found in YOUR part of Montgomery County — not just The Woodlands.",
        href: "/services/marketing",
      },
      {
        title: "eCommerce Solutions",
        description:
          "Reach the 781,000+ residents across the county, not just the ones who drive past your sign.",
        href: "/services/ecommerce",
      },
    ],

    topIndustries: [
      "Healthcare & Medical",
      "Contractors & Remodeling",
      "HVAC & Home Services",
      "Restaurants & Food Service",
      "Professional Services",
      "Real Estate",
      "Lawn Care & Landscaping",
      "Auto & Detailing",
    ],

    nearbyAreas: [
      "Conroe",
      "The Woodlands",
      "Magnolia",
      "Willis",
      "Montgomery",
      "Cut and Shoot",
      "Shenandoah",
      "Spring",
      "Tomball",
    ],

    cta: {
      headline: "Your Part of Montgomery County Deserves to Be Found.",
      subheadline:
        "781,000 people live here. Make sure the ones near you can find your business.",
    },

    seo: {
      title: "Web Design & Marketing in Montgomery County, TX | Aeopic",
      description:
        "Custom web applications and marketing for Montgomery County businesses. From Lake Conroe to FM 1488, we build platforms for every corner of Texas's fastest-growing county.",
      keywords: [
        "web design Montgomery County TX",
        "marketing Montgomery County Texas",
        "SEO Montgomery County TX",
        "The Woodlands web design",
        "Conroe marketing",
        "Montgomery County business",
      ],
      ogUrl: "https://aeopic.com/locations/montgomery-county",
      geoLat: 30.3877,
      geoLng: -95.5026,
    },
  },

  tomball: {
    city: "Tomball",
    slug: "tomball",
    region: "Greater Houston",

    colors: {
      primary: "#8B2332",
      secondary: "#D4A843",
      gradient:
        "linear-gradient(135deg, rgba(139,35,50,0.7), rgba(212,168,67,0.4))",
    },

    hero: {
      tagline: "Oil Town. Railroad Town. Your Town.",
      headline: "Small-Town Roots. Big-City Reach.",
      subheadline:
        "Tejas Chocolate won a James Beard Award. The German Festival draws 50,000. Your business has a story worth telling — we make sure it gets heard.",
      image: "/images/locations/tomball-hero.jpg",
    },

    identity: {
      headline: "Heritage That Punches Above Its Weight",
      description:
        "Tomball shouldn't work as well as it does. A small railroad town that got swallowed by Houston's sprawl should have lost its identity years ago. Instead, it doubled down. Old Town Tomball is thriving — not as a nostalgia play, but as a genuinely great place to spend a Saturday. Tejas Chocolate + BBQ put the city on the national food map. The German Festival brings in 50,000 people every spring. And the schools are good enough that families drive past a dozen other suburbs to get here.\n\nBut the Grand Parkway changed the game. The 99 corridor is pulling development — and customers — away from Old Town and toward the new commercial centers. If your business is on Main Street, you're competing with national chains that have 99 visibility and unlimited marketing budgets. If your business is on the 99, you're competing with everyone. Either way, being found online isn't optional anymore.",
      stats: [
        { value: "75,000+", label: "ZIP Code Population" },
        { value: "#3", label: "Houston-Area School District" },
        { value: "50,000+", label: "German Festival Visitors" },
      ],
    },

    landmarks: [
      {
        name: "Historic Railroad Depot",
        description:
          "Where the railroad built the town — now the heart of Old Town events.",
      },
      {
        name: "Tejas Chocolate + BBQ",
        description:
          "James Beard Award winner. The reason food critics know where Tomball is.",
      },
      {
        name: "Old Town Main Street",
        description:
          "Antiques, local shops, and the Saturday morning crowd that keeps it alive.",
      },
      {
        name: "Burroughs Park",
        description:
          "320 acres of trails and fishing that locals don't want to share.",
      },
      {
        name: "Tomball Museum Center",
        description:
          "Railroad history, German heritage, and the oil boom — all in one block.",
      },
    ],

    painPoints: [
      {
        headline: "Old Town vs. Grand Parkway Development",
        description:
          "The 99 corridor is pulling customers away from Main Street businesses. We build the digital presence that brings them back — search doesn't care which side of town you're on.",
      },
      {
        headline: "ZIP Code Identity Crisis",
        description:
          "77375 is massive. Half the people with a Tomball address don't live in Tomball city limits. We build location strategies that capture the whole ZIP, not just the city.",
      },
      {
        headline: "Festival Crowds Don't Equal Year-Round Customers",
        description:
          "The German Festival fills your register for a weekend. We build marketing systems that keep customers coming the other 51 weeks.",
      },
    ],

    services: [
      {
        title: "Custom Web Applications",
        description:
          "From Old Town antique shops to Grand Parkway service companies — platforms that work for both Tomballs.",
        href: "/services/web-apps",
      },
      {
        title: "AI-Powered Tools",
        description:
          "Smart scheduling and automated follow-ups for businesses that are busiest when the festivals hit.",
        href: "/services/ai-tools",
      },
      {
        title: "Marketing & SEO",
        description:
          "Own the 77375 ZIP code online. Every search, every map result, every review.",
        href: "/services/marketing",
      },
      {
        title: "eCommerce Solutions",
        description:
          "Sell to the 75,000+ people in your ZIP code — not just the ones who walk past your door.",
        href: "/services/ecommerce",
      },
    ],

    topIndustries: [
      "HVAC & Home Services",
      "Restaurants & Food Service",
      "Auto & Detailing",
      "Contractors & Remodeling",
      "Medical & Dental",
      "Lawn Care & Landscaping",
      "Cleaning & Pest Control",
      "Professional Services",
    ],

    nearbyAreas: [
      "Magnolia",
      "Spring",
      "The Woodlands",
      "Cypress",
      "Klein",
      "Pinehurst",
      "Waller",
      "Hufsmith",
    ],

    cta: {
      headline: "Tomball Has the Story. We Build the Stage.",
      subheadline:
        "From Old Town roots to Grand Parkway growth — your business deserves to be found.",
    },

    seo: {
      title: "Web Design & Marketing in Tomball, TX | Aeopic",
      description:
        "Custom web applications and marketing for Tomball businesses. Built for the 77375 — Old Town charm meets Grand Parkway growth.",
      keywords: [
        "web design Tomball TX",
        "marketing Tomball Texas",
        "SEO Tomball TX",
        "Tomball web development",
        "77375 marketing",
        "Old Town Tomball business",
      ],
      ogUrl: "https://aeopic.com/locations/tomball",
      geoLat: 30.0972,
      geoLng: -95.6161,
    },
  },

  bryan: {
    city: "Bryan",
    slug: "bryan",
    region: "Brazos Valley",

    colors: {
      primary: "#A0522D",
      secondary: "#D4A017",
      gradient:
        "linear-gradient(135deg, rgba(160,82,45,0.7), rgba(212,160,23,0.4))",
    },

    hero: {
      tagline: "The Heart of the Brazos Valley",
      headline:
        "Bryan Businesses Deserve More Than College Station's Shadow.",
      subheadline:
        "91,000 residents. 91 historic downtown buildings on the National Register. The best taco trail in Texas. Bryan isn't the other half of BCS — it's the original.",
      image: "/images/locations/bryan-hero.jpg",
    },

    identity: {
      headline: "The Original. Not the Other Half.",
      description:
        "Bryan was here first. Before A&M, before College Station existed as a city, Bryan was the commercial center of the Brazos Valley. That history shows — 91 buildings on the National Register of Historic Places, a downtown that's become one of the best small-city arts and food districts in Texas, and a community identity that's distinctly NOT College Station.\n\nBut Google doesn't know that. Search 'restaurants Bryan TX' and half the results are in College Station. Search 'plumber near me' from downtown Bryan and you'll see CS businesses first. The BCS pairing that helps with tourism hurts Bryan businesses in search — your customers are being siphoned across Highway 6 by algorithms that treat you as the same city. And when students leave for summer, Bryan feels the revenue drop too, even though your customer base is local families and the Hispanic community that built this city's food culture.",
      stats: [
        { value: "91,000+", label: "Population" },
        { value: "41%", label: "Hispanic Community" },
        { value: "12%", label: "Below National Cost of Living" },
      ],
    },

    landmarks: [
      {
        name: "Historic Downtown Bryan",
        description:
          "91 buildings on the National Register. Not a replica — the real thing.",
      },
      {
        name: "The LaSalle Hotel",
        description:
          "1928 landmark turned boutique hotel. Downtown's anchor.",
      },
      {
        name: "Messina Hof Winery",
        description: "Texas wine before Texas wine was cool.",
      },
      {
        name: "The Queen Theater",
        description: "Live music in a restored 1939 movie palace.",
      },
      {
        name: "The Taco Trail",
        description:
          "45+ taquerias. The best-kept food secret in Texas.",
      },
    ],

    painPoints: [
      {
        headline: "Living in College Station's Shadow",
        description:
          "Google treats BCS as one city — and College Station wins. We build Bryan-specific SEO strategies that fight for your side of Highway 6.",
      },
      {
        headline: "Summer Revenue Drop (Even for Local Businesses)",
        description:
          "When 72,000 students leave, even Bryan businesses feel it. We build marketing systems that strengthen your local base so summer doesn't mean survival mode.",
      },
      {
        headline: "Low Foot Traffic Despite Great Downtown",
        description:
          "Downtown Bryan is incredible — but weekday foot traffic doesn't match what the district deserves. We drive digital traffic that becomes physical traffic.",
      },
    ],

    services: [
      {
        title: "Custom Web Applications",
        description:
          "From downtown Bryan boutiques to Taco Trail taquerias — platforms that tell YOUR story, not BCS's.",
        href: "/services/web-apps",
      },
      {
        title: "AI-Powered Tools",
        description:
          "Bilingual chatbots, automated booking, and smart follow-ups for a community that operates in two languages.",
        href: "/services/ai-tools",
      },
      {
        title: "Marketing & SEO",
        description:
          "Fight for Bryan visibility in a search landscape dominated by College Station.",
        href: "/services/marketing",
      },
      {
        title: "eCommerce Solutions",
        description:
          "Sell downtown Bryan's unique products to people who've never crossed Highway 6.",
        href: "/services/ecommerce",
      },
    ],

    topIndustries: [
      "Restaurants & Food Service",
      "HVAC & Home Services",
      "Medical & Dental",
      "Contractors & Remodeling",
      "Auto & Detailing",
      "Law Offices",
      "Lawn Care & Landscaping",
      "Cleaning & Pest Control",
    ],

    nearbyAreas: [
      "College Station",
      "Kurten",
      "Wixon Valley",
      "Benchley",
      "Wellborn",
      "Millican",
      "Navasota",
      "Hearne",
    ],

    cta: {
      headline: "Bryan Has the Culture. Let's Build the Visibility.",
      subheadline:
        "Your business was here before the algorithms decided College Station came first. Time to fix that.",
    },

    seo: {
      title: "Web Design & Marketing in Bryan, TX | Aeopic",
      description:
        "Custom web applications and marketing for Bryan businesses. Built for Bryan — not Bryan-College Station. We fight for your side of Highway 6.",
      keywords: [
        "web design Bryan TX",
        "marketing Bryan Texas",
        "SEO Bryan TX",
        "Bryan web development",
        "Brazos Valley marketing",
        "downtown Bryan business",
      ],
      ogUrl: "https://aeopic.com/locations/bryan",
      geoLat: 30.6744,
      geoLng: -96.37,
    },
  },

  magnolia: {
    city: "Magnolia",
    slug: "magnolia",
    region: "Montgomery County",

    colors: {
      primary: "#2D5F2E",
      secondary: "#C4883A",
      gradient:
        "linear-gradient(135deg, rgba(45,95,46,0.7), rgba(196,136,58,0.4))",
    },

    hero: {
      tagline: "Where the Pines Still Outnumber the Rooftops",
      headline:
        "Big Enough to Grow. Small Enough to Know Your Neighbor.",
      subheadline:
        "147% growth in four years. $104K median income. And still no real downtown. The opportunity is wide open — if you build the right platform.",
      image: "/images/locations/magnolia-hero.jpg",
    },

    identity: {
      headline: "The Quiet Boom",
      description:
        "Magnolia is what happens when a rural crossroads becomes one of the most desirable addresses in greater Houston without anyone building a downtown first. The growth has been staggering — 147% in four years — but it's residential growth. Families moving in for the schools, the acreage, the distance from Houston's congestion. They're building homes, not storefronts.\n\nThat creates a strange business environment. There's enormous spending power ($104K median family income) but almost no commercial center to capture it. FM 1488 is the de facto Main Street, but it's a highway corridor, not a walkable district. Most residents commute to The Woodlands or Houston for work — and for shopping, unless a local business gives them a reason to stay. The Texas Renaissance Festival brings 500,000 visitors annually to Todd Mission, just down the road, but that's a seasonal spike, not a business strategy.",
      stats: [
        { value: "147%", label: "Growth in 4 Years" },
        { value: "$104K", label: "Median Family Income" },
        { value: "500K+", label: "Annual Ren Fest Visitors Nearby" },
      ],
    },

    landmarks: [
      {
        name: "The Magnolia Stroll",
        description:
          "Third Saturday monthly. The closest thing Magnolia has to a town square.",
      },
      {
        name: "Unity Park",
        description:
          "Community gathering spot in a city still figuring out where to gather.",
      },
      {
        name: "FM 1488 Corridor",
        description:
          "Magnolia's Main Street — a highway, not a sidewalk, but it works.",
      },
      {
        name: "Texas Renaissance Festival",
        description:
          "Todd Mission, technically. But Magnolia gets the traffic and the economic ripple.",
      },
      {
        name: "H-E-B Magnolia Place",
        description:
          "When H-E-B builds a flagship, it means the growth is real.",
      },
    ],

    painPoints: [
      {
        headline: "No Downtown = No Foot Traffic Center",
        description:
          "When there's no Main Street, there's no browsing. Every customer has to choose to come to you. We build the digital presence that makes that choice easy.",
      },
      {
        headline: "Commuter Economy Means Leaky Revenue",
        description:
          "Most Magnolia residents work — and spend — somewhere else. We build the marketing that captures spending locally before it drives south on 249.",
      },
      {
        headline: "Horse & Ranch Businesses Need a Different Approach",
        description:
          "Equestrian services, ranch supply, and acreage-based businesses don't fit the standard digital playbook. We build platforms that reach the right buyers, not just the most buyers.",
      },
    ],

    services: [
      {
        title: "Custom Web Applications",
        description:
          "From ranch services to FM 1488 storefronts — platforms for the businesses that actually serve Magnolia.",
        href: "/services/web-apps",
      },
      {
        title: "AI-Powered Tools",
        description:
          "Smart booking and lead capture for businesses whose customers are making decisions from their truck, not a desktop.",
        href: "/services/ai-tools",
      },
      {
        title: "Marketing & SEO",
        description:
          "Get found by the families moving in — before they default to The Woodlands for everything.",
        href: "/services/marketing",
      },
      {
        title: "eCommerce Solutions",
        description:
          "Reach the $104K-income households that live here but shop elsewhere.",
        href: "/services/ecommerce",
      },
    ],

    topIndustries: [
      "Contractors & Remodeling",
      "HVAC & Home Services",
      "Lawn Care & Landscaping",
      "Restaurants & Food Service",
      "Auto & Detailing",
      "Medical & Dental",
      "Professional Services",
      "Cleaning & Pest Control",
    ],

    nearbyAreas: [
      "Tomball",
      "The Woodlands",
      "Conroe",
      "Pinehurst",
      "Plantersville",
      "Todd Mission",
      "Waller",
      "Hempstead",
    ],

    cta: {
      headline: "147% Growth. Zero Excuses Not to Be Found Online.",
      subheadline:
        "The families are here. The spending power is here. Make sure your business is the one they find.",
    },

    seo: {
      title: "Web Design & Marketing in Magnolia, TX | Aeopic",
      description:
        "Custom web applications and marketing for Magnolia businesses. Built for a community growing at 147% — from FM 1488 to the ranch roads.",
      keywords: [
        "web design Magnolia TX",
        "marketing Magnolia Texas",
        "SEO Magnolia TX",
        "Magnolia web development",
        "FM 1488 business",
        "Montgomery County marketing",
      ],
      ogUrl: "https://aeopic.com/locations/magnolia",
      geoLat: 30.2091,
      geoLng: -95.7508,
    },
  },

  manor: {
    city: "Manor",
    slug: "manor",
    region: "Austin Metro",
    pronunciation: "MAY-ner",

    colors: {
      primary: "#C8860C",
      secondary: "#3A7D44",
      gradient:
        "linear-gradient(135deg, rgba(200,134,12,0.7), rgba(58,125,68,0.4))",
    },

    hero: {
      tagline: "Pronounced MAY-ner. Growing Like You Wouldn't Believe.",
      headline: "25,000 New Neighbors Are Looking for You.",
      subheadline:
        "2,000% growth in 25 years. The 6th fastest-growing city in America. And most of those new residents have zero loyalty to existing businesses. That's a problem — or an opportunity.",
      image: "/images/locations/manor-hero.jpg",
    },

    identity: {
      headline: "The Fastest Growth You've Never Heard Of",
      description:
        "Manor's growth story is almost unbelievable. From a few thousand people to nearly 30,000 in just over two decades. The 6th fastest-growing city in America, and most people outside Austin have never heard of it. Tesla is down the road. Samsung is building the largest semiconductor facility in the western hemisphere nearby. And thousands of families are discovering that Manor offers Austin-area access at a fraction of Austin prices.\n\nBut growth this fast creates chaos for local businesses. New residents arrive with no relationships, no loyalty, and no idea what's already here. They default to Google, to Yelp, to whatever shows up first. The food and service scene is thin — which means every new restaurant, every HVAC company, every lawn service is competing for customers who are actively searching but haven't committed to anyone yet. The window to capture loyalty is NOW.",
      stats: [
        { value: "2,000%+", label: "Growth in 25 Years" },
        { value: "55.7%", label: "Hispanic Community" },
        { value: "#6", label: "Fastest-Growing US City" },
      ],
    },

    landmarks: [
      {
        name: "Manor Water Tower",
        description:
          "Yes, from 'What's Eating Gilbert Grape.' The town's most unexpected claim to fame.",
      },
      {
        name: "Whisper Valley",
        description:
          "America's first geothermal community. The future, built in Manor.",
      },
      {
        name: "ShadowGlen Golf Club",
        description:
          "The course that convinced people Manor could be upscale.",
      },
      {
        name: "Manor Crossing",
        description:
          "The first H-E-B. The moment Manor became a real suburb.",
      },
      {
        name: "Old Manor Road",
        description:
          "The original corridor — where Manor's small-town roots still show.",
      },
    ],

    painPoints: [
      {
        headline: "Residential Growth Outpacing Commercial Infrastructure",
        description:
          "People are arriving faster than businesses can serve them. That's your opportunity — but only if they can find you. We build the platform that captures demand before someone else does.",
      },
      {
        headline: "New Residents Have Zero Loyalty",
        description:
          "25,000 new neighbors who've never heard of your business. They're searching right now. We make sure you're what they find — before they default to an Austin chain.",
      },
      {
        headline: "Thin Service Scene = Wide Open Opportunity",
        description:
          "Less competition in Manor than anywhere else on this list. We build the digital infrastructure that lets you own your category before it gets crowded.",
      },
    ],

    services: [
      {
        title: "Custom Web Applications",
        description:
          "From Whisper Valley homes to Old Manor Road shops — platforms for the businesses building Manor's future.",
        href: "/services/web-apps",
      },
      {
        title: "AI-Powered Tools",
        description:
          "Automated lead capture for a city where every new resident is a potential first-time customer.",
        href: "/services/ai-tools",
      },
      {
        title: "Marketing & SEO",
        description:
          "Own 'Manor TX' in search before the competition realizes the opportunity.",
        href: "/services/marketing",
      },
      {
        title: "eCommerce Solutions",
        description:
          "Reach the fastest-growing customer base in Texas — from their phone, in their new home.",
        href: "/services/ecommerce",
      },
    ],

    topIndustries: [
      "Restaurants & Food Service",
      "HVAC & Home Services",
      "Contractors & Remodeling",
      "Lawn Care & Landscaping",
      "Cleaning & Pest Control",
      "Medical & Dental",
      "Auto & Detailing",
      "Professional Services",
    ],

    nearbyAreas: [
      "Austin",
      "Pflugerville",
      "Elgin",
      "Taylor",
      "Hutto",
      "Round Rock",
      "Webberville",
      "Del Valle",
    ],

    cta: {
      headline: "25,000 New Residents. Zero Loyalty. Your Move.",
      subheadline:
        "The window to become Manor's go-to is right now. Not next year.",
    },

    seo: {
      title: "Web Design & Marketing in Manor, TX | Aeopic",
      description:
        "Custom web applications and marketing for Manor businesses. That's MAY-ner — the 6th fastest-growing city in America. Your new neighbors are searching. Let them find you.",
      keywords: [
        "web design Manor TX",
        "marketing Manor Texas",
        "SEO Manor TX",
        "Manor web development",
        "Manor business marketing",
        "Austin metro web design",
      ],
      ogUrl: "https://aeopic.com/locations/manor",
      geoLat: 30.3416,
      geoLng: -97.5569,
    },
  },
};

export function getLocationData(slug: string): LocationData | undefined {
  return locationConfigs[slug];
}

export function getAllLocationSlugs(): string[] {
  return Object.keys(locationConfigs);
}
