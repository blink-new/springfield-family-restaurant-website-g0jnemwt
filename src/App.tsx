import { useState } from 'react'
import { Phone, Clock, MapPin, Utensils, Star, Camera, Wine, ChefHat, Users, Heart, Calendar, Mail } from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const lunchMenu = [
    { name: "Risotto ai Funghi Porcini", price: "€24", description: "Creamy Arborio rice with wild porcini mushrooms, Parmigiano-Reggiano, and fresh herbs" },
    { name: "Spaghetti Carbonara", price: "€18", description: "Traditional Roman pasta with guanciale, pecorino Romano, and farm-fresh eggs" },
    { name: "Osso Buco alla Milanese", price: "€28", description: "Braised veal shanks with saffron risotto and gremolata" },
    { name: "Branzino in Crosta di Sale", price: "€26", description: "Mediterranean sea bass baked in sea salt crust with lemon and herbs" },
    { name: "Parmigiana di Melanzane", price: "€20", description: "Layers of eggplant, San Marzano tomatoes, mozzarella, and basil" },
    { name: "Vitello Tonnato", price: "€22", description: "Tender veal with tuna sauce, capers, and arugula" }
  ]

  const dinnerMenu = [
    { name: "Antipasto della Casa", price: "€16", description: "Selection of cured meats, aged cheeses, olives, and marinated vegetables" },
    { name: "Linguine alle Vongole", price: "€26", description: "Fresh clams with white wine, garlic, parsley, and extra virgin olive oil" },
    { name: "Bistecca alla Fiorentina", price: "€45", description: "Grilled T-bone steak from Chianina cattle, served with rosemary potatoes" },
    { name: "Branzino in Crosta", price: "€32", description: "Whole sea bass in herb crust with seasonal vegetables" },
    { name: "Agnello alle Erbe", price: "€38", description: "Herb-crusted rack of lamb with roasted vegetables and red wine reduction" },
    { name: "Tiramisu della Nonna", price: "€12", description: "Traditional mascarpone dessert with espresso-soaked ladyfingers" }
  ]

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1739369482114-d380242d99d7?w=400&h=300&fit=crop", alt: "Elegant dining room with warm lighting" },
    { src: "https://images.unsplash.com/photo-1602081112620-4da569dda684?w=400&h=300&fit=crop", alt: "Sophisticated table setting" },
    { src: "https://images.unsplash.com/photo-1576054305028-5b743a5e07cb?w=400&h=300&fit=crop", alt: "Fine dining atmosphere" },
    { src: "https://images.unsplash.com/photo-1708649783117-dcf8e76ed15f?w=400&h=300&fit=crop", alt: "Authentic Italian pizza" },
    { src: "https://images.unsplash.com/photo-1722239314399-7fe633785831?w=400&h=300&fit=crop", alt: "Classic Italian pasta dish" },
    { src: "https://images.unsplash.com/photo-1626803774112-8288cfa441b6?w=400&h=300&fit=crop", alt: "Traditional Italian cuisine" }
  ]

  const testimonials = [
    {
      name: "Marco Antonelli",
      rating: 5,
      text: "Un'esperienza culinaria straordinaria! The authentic flavors and elegant atmosphere make this the finest Italian restaurant in Rome. Every dish is a masterpiece.",
      location: "Roma, Italia"
    },
    {
      name: "Isabella Rossi",
      rating: 5,
      text: "The pasta is made fresh daily and you can taste the difference. The service is impeccable and the wine selection is exceptional. Truly a gem in the heart of Rome.",
      location: "Roma, Italia"
    },
    {
      name: "Giovanni Bianchi",
      rating: 5,
      text: "Three generations of my family have dined here. The tradition, quality, and warmth never change. This is what Italian hospitality should be.",
      location: "Roma, Italia"
    }
  ]

  const renderNavigation = () => (
    <nav className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <h1 className="font-serif text-2xl font-bold">Ristorante Bella Roma</h1>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`hover:text-accent transition-colors ${currentPage === 'home' ? 'text-accent font-semibold' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('menu')}
              className={`hover:text-accent transition-colors ${currentPage === 'menu' ? 'text-accent font-semibold' : ''}`}
            >
              Menu
            </button>
            <button 
              onClick={() => setCurrentPage('about')}
              className={`hover:text-accent transition-colors ${currentPage === 'about' ? 'text-accent font-semibold' : ''}`}
            >
              About Us
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className={`hover:text-accent transition-colors ${currentPage === 'contact' ? 'text-accent font-semibold' : ''}`}
            >
              Contact
            </button>
          </div>
          <Button 
            size="sm" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
          >
            <Phone className="mr-2 h-4 w-4" />
            Reserve
          </Button>
        </div>
      </div>
    </nav>
  )

  const renderHomePage = () => (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-accent/20">
            <h2 className="font-serif text-5xl md:text-7xl text-primary mb-6 leading-tight">
              Benvenuti alla<br />
              <span className="text-accent">Bella Roma</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Experience the authentic flavors of Italy in the heart of Rome. 
              Our family has been serving traditional Italian cuisine with passion and pride since 1952.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg">
                <Calendar className="mr-2 h-5 w-5" />
                Make Reservation
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => setCurrentPage('menu')}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-4 rounded-full text-lg"
              >
                <Utensils className="mr-2 h-5 w-5" />
                View Menu
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
              <Camera className="inline-block mr-4 h-12 w-12" />
              La Nostra Atmosfera
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Step into our elegant dining rooms where Italian tradition meets sophisticated ambiance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-accent/20">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Camera className="h-16 w-16 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
              <ChefHat className="inline-block mr-4 h-12 w-12" />
              Signature Dishes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most beloved creations, crafted with the finest Italian ingredients
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-accent/30 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Utensils className="h-10 w-10 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-2xl text-primary mb-4">Risotto ai Funghi Porcini</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our signature risotto with wild porcini mushrooms, aged Parmigiano-Reggiano, and fresh herbs from our garden.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-accent/30 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Wine className="h-10 w-10 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-2xl text-primary mb-4">Osso Buco alla Milanese</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tender braised veal shanks served with saffron risotto and traditional gremolata, a true Milanese classic.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-accent/30 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-2xl text-primary mb-4">Tiramisu della Nonna</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our grandmother's original recipe with mascarpone, espresso-soaked ladyfingers, and a touch of Marsala wine.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
              <Star className="inline-block mr-4 h-12 w-12" />
              What Our Guests Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from our cherished guests about their dining experiences
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-accent/30 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed text-center">
                    "{testimonial.text}"
                  </p>
                  <div className="text-center">
                    <p className="font-bold text-primary text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )

  const renderMenuPage = () => (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl text-primary mb-6">
            La Nostra Carta
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our menu celebrates the rich culinary traditions of Italy, featuring seasonal ingredients 
            sourced from local markets and our own herb garden.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Lunch Menu */}
          <Card className="border-2 border-accent/30 shadow-2xl">
            <CardHeader className="bg-accent/10 text-center py-8">
              <CardTitle className="font-serif text-3xl text-primary flex items-center justify-center">
                <Utensils className="mr-3 h-8 w-8" />
                Pranzo
              </CardTitle>
              <p className="text-muted-foreground font-medium text-lg">12:00 PM - 3:30 PM</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                {lunchMenu.map((item, index) => (
                  <div key={index} className="border-b border-accent/20 pb-6 last:border-b-0">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-serif font-semibold text-primary text-lg leading-tight">{item.name}</h4>
                      <span className="font-bold text-accent text-xl ml-4">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Dinner Menu */}
          <Card className="border-2 border-accent/30 shadow-2xl">
            <CardHeader className="bg-accent/10 text-center py-8">
              <CardTitle className="font-serif text-3xl text-primary flex items-center justify-center">
                <Wine className="mr-3 h-8 w-8" />
                Cena
              </CardTitle>
              <p className="text-muted-foreground font-medium text-lg">7:00 PM - 11:00 PM</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                {dinnerMenu.map((item, index) => (
                  <div key={index} className="border-b border-accent/20 pb-6 last:border-b-0">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-serif font-semibold text-primary text-lg leading-tight">{item.name}</h4>
                      <span className="font-bold text-accent text-xl ml-4">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <Card className="border-2 border-primary/30 shadow-xl inline-block">
            <CardContent className="p-8">
              <Wine className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-serif text-2xl text-primary mb-4">Wine Pairing Available</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Our sommelier has carefully selected wines from the finest Italian vineyards to complement each dish.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold">
                View Wine List
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  const renderAboutPage = () => (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Restaurant History */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-6xl text-primary mb-6">
              La Nostra Storia
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A legacy of Italian culinary excellence spanning three generations
            </p>
          </div>
          
          <Card className="border-2 border-accent/30 shadow-2xl">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="font-serif text-3xl text-primary mb-6">Founded in 1952</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Ristorante Bella Roma was founded by Giuseppe and Maria Antonelli in 1952, shortly after they moved to Rome from their native Tuscany. With nothing but a passion for authentic Italian cuisine and a handful of family recipes passed down through generations, they opened a small trattoria in the heart of Rome.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    What started as a humble neighborhood restaurant has grown into one of Rome's most celebrated dining establishments, while never losing sight of the values that Giuseppe and Maria instilled: using only the finest ingredients, treating every guest like family, and preserving the authentic flavors of Italy.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Today, the restaurant continues to honor this legacy while embracing modern culinary techniques, creating an experience that is both timeless and contemporary.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-accent/10 rounded-3xl p-8 border-2 border-accent/20">
                    <Users className="h-16 w-16 text-accent mx-auto mb-6" />
                    <h4 className="font-serif text-2xl text-primary mb-4">Three Generations</h4>
                    <p className="text-muted-foreground">
                      From Giuseppe and Maria to their son Antonio, and now grandson Marco, each generation has added their own touch while preserving the authentic Italian spirit.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Current Owners */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
              Current Owners
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the passionate family behind Bella Roma's continued success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 border-accent/30 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="bg-accent rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-12 w-12 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-2xl text-primary mb-4">Marco Antonelli</h3>
                <p className="text-accent font-semibold mb-4">Owner & General Manager</p>
                <p className="text-muted-foreground leading-relaxed">
                  Marco represents the third generation of the Antonelli family. After studying hospitality management in Milan and working in renowned restaurants across Europe, he returned to Rome to carry on the family tradition. His vision combines respect for authentic Italian cuisine with modern hospitality standards, ensuring every guest experiences the warmth and excellence that defines Bella Roma.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-accent/30 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="bg-accent rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-12 w-12 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-2xl text-primary mb-4">Lucia Antonelli</h3>
                <p className="text-accent font-semibold mb-4">Co-Owner & Operations Director</p>
                <p className="text-muted-foreground leading-relaxed">
                  Lucia, Marco's wife, brings her expertise in wine and hospitality to Bella Roma. A certified sommelier with a degree in enology from the University of Florence, she curates our extensive wine collection and oversees the front-of-house operations. Her attention to detail and passion for Italian wine culture ensures that every meal is perfectly paired and every guest feels welcomed.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Chef Profile */}
        <section>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
              Our Executive Chef
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The culinary mastermind behind our authentic Italian flavors
            </p>
          </div>
          
          <Card className="border-2 border-accent/30 shadow-2xl">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center">
                  <div className="bg-accent/10 rounded-3xl p-8 border-2 border-accent/20">
                    <ChefHat className="h-20 w-20 text-accent mx-auto mb-6" />
                    <h3 className="font-serif text-3xl text-primary mb-4">Chef Alessandro Rossi</h3>
                    <p className="text-accent font-semibold text-lg mb-4">Executive Chef</p>
                    <div className="flex justify-center space-x-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-accent fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">Michelin-trained • 15+ years experience</p>
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Chef Alessandro Rossi brings over 15 years of culinary expertise to Bella Roma. Born in Bologna, the gastronomic heart of Italy, Alessandro trained under Michelin-starred chefs in both Italy and France before joining our family in 2018.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    His philosophy centers on respecting traditional Italian cooking methods while incorporating seasonal, locally-sourced ingredients. Alessandro personally visits Rome's markets each morning to select the finest produce, ensuring that every dish reflects the authentic flavors of Italy.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Under his leadership, our kitchen has earned recognition from food critics and culinary publications throughout Italy. His signature dishes, including the Risotto ai Funghi Porcini and Osso Buco alla Milanese, have become legendary among our regular guests.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    "Cooking is not just about feeding the body," says Chef Alessandro, "it's about creating memories, bringing families together, and sharing the love that goes into every dish."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )

  const renderContactPage = () => (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl text-primary mb-6">
            Contattaci
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We look forward to welcoming you to Bella Roma. Contact us for reservations or inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-2 border-accent/30 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="bg-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-10 w-10 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-2xl text-primary mb-4">Location</h3>
                <div className="space-y-2">
                  <p className="font-semibold text-primary">Via del Corso, 123</p>
                  <p className="text-muted-foreground">00186 Roma, Italy</p>
                  <p className="text-sm text-muted-foreground">Near the Pantheon</p>
                </div>
                <Button className="mt-4 bg-primary hover:bg-primary/90 text-white">
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/30 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="bg-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-10 w-10 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-2xl text-primary mb-6">Hours</h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 border border-accent/20">
                    <p className="font-semibold text-primary">Lunch</p>
                    <p className="text-muted-foreground">12:00 PM - 3:30 PM</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-accent/20">
                    <p className="font-semibold text-primary">Dinner</p>
                    <p className="text-muted-foreground">7:00 PM - 11:00 PM</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Closed Mondays • Open Tuesday - Sunday
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/30 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="bg-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-10 w-10 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-2xl text-primary mb-4">Reservations</h3>
                <div className="space-y-3">
                  <p className="font-bold text-accent text-xl">+39 06 1234 5678</p>
                  <p className="text-muted-foreground">Call for reservations</p>
                  <p className="text-sm text-muted-foreground">
                    Recommended for dinner service
                  </p>
                </div>
                <Button className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-2 border-accent/30 shadow-xl">
            <CardHeader className="bg-accent/10 text-center py-8">
              <CardTitle className="font-serif text-3xl text-primary flex items-center justify-center">
                <Mail className="mr-3 h-8 w-8" />
                Send us a Message
              </CardTitle>
              <p className="text-muted-foreground">We'll get back to you within 24 hours</p>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-accent/30 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 border border-accent/30 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border border-accent/30 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Subject</label>
                  <select className="w-full p-3 border border-accent/30 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors">
                    <option>Reservation Inquiry</option>
                    <option>Private Event</option>
                    <option>General Question</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full p-3 border border-accent/30 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors resize-none"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 text-lg">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'menu':
        return renderMenuPage()
      case 'about':
        return renderAboutPage()
      case 'contact':
        return renderContactPage()
      default:
        return renderHomePage()
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {renderNavigation()}
      {renderCurrentPage()}
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-serif text-3xl text-accent mb-4">
              Ristorante Bella Roma
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Authentic Italian cuisine in the heart of Rome since 1952
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <p className="font-semibold mb-2 text-accent">Address</p>
              <p>Via del Corso, 123</p>
              <p>00186 Roma, Italy</p>
            </div>
            <div className="text-center">
              <p className="font-semibold mb-2 text-accent">Reservations</p>
              <p className="text-accent font-bold text-lg">+39 06 1234 5678</p>
            </div>
            <div className="text-center">
              <p className="font-semibold mb-2 text-accent">Hours</p>
              <p>Lunch: 12:00 PM - 3:30 PM</p>
              <p>Dinner: 7:00 PM - 11:00 PM</p>
              <p className="text-sm opacity-75 mt-1">Closed Mondays</p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="opacity-75">
              © 2024 Ristorante Bella Roma. All rights reserved. | Family owned and operated since 1952.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App