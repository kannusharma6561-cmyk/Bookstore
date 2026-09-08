



const books = [
  { 
    id: 1, 
    title: "Atomic Habits", 
    author: "James Clear", 
    rating: 4.6, 
    cover: "/booksimg/atomicHabits-250kb.jpg",
    description: "One of the best-selling self-help books of the decade. James Clear breaks down exactly why tiny 1% changes compound into massive results over time. It became a global sensation because it doesn't just motivate — it gives you a practical, science-backed system to actually build habits that stick, using simple frameworks like the '2-minute rule' and 'habit stacking'."
  },
  { 
    id: 2, 
    title: "The Alchemist", 
    author: "Paulo Coelho", 
    rating: 4.7, 
    cover: "/booksimg/elchemist-250kb.jpg",
    description: "Translated into over 80 languages and one of the best-selling books in history. Its magic lies in simplicity — a young shepherd's journey to find treasure becomes a mirror for every reader's own search for purpose. Readers return to it again and again because its message, 'when you want something, all the universe conspires to help you achieve it,' feels personal every single time."
  },
  { 
    id: 3, 
    title: "The Psychology of Money", 
    author: "Morgan Housel", 
    rating: 4.5, 
    cover:"/booksimg/psychology-250kb.jpg" ,
    description: "A modern finance classic that exploded in popularity because it flips the usual money advice on its head — it's not about spreadsheets, it's about behavior. Through 19 short stories, Housel shows why a janitor can become a millionaire while a Harvard-educated executive can go bankrupt, making it essential reading for anyone who's ever felt confused about money."
  },
  { 
    id: 4, 
    title: "Rich Dad Poor Dad", 
    author: "Robert Kiyosaki", 
    rating: 4.4, 
    cover: "/booksimg/richh.jpg" ,
    description: "One of the most influential personal finance books ever written, having sold over 40 million copies worldwide. It became iconic for introducing the world to concepts like 'assets vs. liabilities' in plain language, challenging an entire generation to rethink everything school taught them about jobs, money, and financial freedom."
  },

  { id: 5, title: "Think and Grow Rich", author: "Napoleon Hill", rating: 4.5, cover: "/booksimg/thinkandgrowrich.jpg" , description: "A classic on the mindset and principles behind achieving wealth and success." },
  { id: 6, title: "The Great Gatsby", author: "F. Scott Fitzgerald", rating: 4.3, cover: "/booksimg/thegreatgatsby.jpg", description: "A tragic tale of love, wealth, and the American Dream in the Jazz Age." },
  { id: 7, title: "1984", author: "George Orwell", rating: 4.7, cover: "/booksimg/1984.jpg", description: "A chilling vision of a totalitarian future where Big Brother watches everyone." },
  { id: 8, title: "To Kill a Mockingbird", author: "Harper Lee", rating: 4.6, cover: "/booksimg/mokingbird.jpg", description: "A powerful story of racial injustice and moral growth in the American South." },
  { id: 9, title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", rating: 4.4, cover: "/booksimg/subtleart.jpg", description: "A counterintuitive approach to living a good life by caring about fewer things." },
  { id: 10, title: "Sapiens", author: "Yuval Noah Harari", rating: 4.7, cover: "/booksimg/sapiens.jpg", description: "A brief history of humankind, exploring how we came to dominate the planet." },
  { id: 11, title: "The Power of Now", author: "Eckhart Tolle", rating: 4.5, cover:"/booksimg/thepowerofnow.jpg" , description: "A guide to spiritual enlightenment through living fully in the present moment." },
  { id: 12, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", rating: 4.8, cover: "/booksimg/harrypotter.jpg", description: "A young boy discovers he's a wizard and begins his magical journey at Hogwarts." },
  { id: 13, title: "The Hobbit", author: "J.R.R. Tolkien", rating: 4.7, cover:"/booksimg/thehobbit.jpg" , description: "A reluctant hobbit sets off on an epic quest to reclaim a stolen treasure." },
  { id: 14, title: "Pride and Prejudice", author: "Jane Austen", rating: 4.6, cover:"/booksimg/prideandprejudice.jpg" , description: "A witty tale of love, class, and misunderstanding in 19th century England." },
  { id: 15, title: "The Catcher in the Rye", author: "J.D. Salinger", rating: 4.2, cover:"/booksimg/thecatcherintherye.jpg" , description: "A rebellious teenager's raw account of alienation in 1950s New York." },
  { id: 16, title: "Man's Search for Meaning", author: "Viktor Frankl", rating: 4.7, cover: "/booksimg/manssearchformeaning.jpg", description: "A holocaust survivor's profound reflection on finding purpose amid suffering." },
  { id: 17, title: "The Alchemist's Daughter", author: "Eileen Kernaghan", rating: 4.1, cover:"/booksimg/daughter.jpg" , description: "A young woman navigates science, magic, and destiny in Elizabethan England." },
  { id: 18, title: "Dune", author: "Frank Herbert", rating: 4.8, cover: "/booksimg/dune.jpg", description: "An epic saga of politics, religion, and survival on a desert planet." },
  { id: 19, title: "The Silent Patient", author: "Alex Michaelides", rating: 4.5, cover: "/booksimg/patient.jpg", description: "A psychological thriller about a woman's shocking act of violence and silence." },
  { id: 20, title: "Educated", author: "Tara Westover", rating: 4.7, cover: "/booksimg/educated.jpg", description: "A memoir of a woman who escaped her isolated upbringing through education." },
  { id: 21, title: "Ikigai", author: "Héctor García", rating: 4.5, cover: "/booksimg/ikigai.jpg", description: "The Japanese secret to a long and happy life, rooted in purpose and passion." },
  { id: 22, title: "The Da Vinci Code", author: "Dan Brown", rating: 4.3, cover: "/booksimg/thevincicode.jpg", description: "A gripping mystery unraveling ancient secrets hidden within famous artworks." },
  { id: 23, title: "Brave New World", author: "Aldous Huxley", rating: 4.5, cover: "/booksimg/brave.jpg", description: "A dystopian vision of a society engineered for false happiness and control." },
  { id: 24, title: "Charlotte's Web", author: "E.B. White", rating: 4.6, cover: "/booksimg/charlottes.jpg", description: "A heartwarming tale of friendship between a pig and a clever spider." },
  { id: 25, title: "The Book Thief", author: "Markus Zusak", rating: 4.7, cover: "/booksimg/bookthief.jpg", description: "A poignant story of a girl who steals books amid the horrors of Nazi Germany." },

];

export default books;