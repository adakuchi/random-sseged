document.addEventListener('DOMContentLoaded', () => {
    // Helper function to get elements by ID
    const $ = id => document.getElementById(id);

    const loadingScreen = $('loading-screen');
    const loadingStart = Date.now();

    // Disable scrolling
    document.body.style.overflow = 'hidden';

    // Add transition property to loading screen
    loadingScreen.style.transition = 'opacity 0.5s ease-out';

    // Function to remove the loading screen
    const removeLoadingScreen = function() {
        console.log('Removing loading screen');
        loadingScreen.style.opacity = '0';
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            document.body.style.overflow = ''; // Re-enable scrolling
            console.log('Loading screen removed');
        }, 500); // Wait for fade out to complete
    };

    // Prevent any interactions while loading
    loadingScreen.addEventListener('click', (e) => e.preventDefault());
    loadingScreen.addEventListener('touchstart', (e) => e.preventDefault());

 window.addEventListener('load', () => {
   removeLoadingScreen()
 });



    // Get important elements
    const mobileMenu = $('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const productGrid = $('product-grid');
    const contactForm = $('contact-form');
    const newsletterForm = $('newsletter-form');
    const categoryFilter = $('category-filter');
    const productSearch = $('product-search');
    const searchButton = $('search-button');


    window.addEventListener('load', () => {
        const loadingEnd = Date.now();
        const loadingDuration = loadingEnd - loadingStart;
        const remainingTime = Math.max(0, minLoadingTime - loadingDuration);

        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
        }, remainingTime);
    });

    // Function to search products
    function searchProducts() {
        const searchTerm = productSearch.value.trim().toLowerCase();
        let foundProduct = null;

        products.forEach(product => {
            if (product.id.toLowerCase() === searchTerm) {
                foundProduct = product;
            }
        });

        if (foundProduct) {
            displayProducts([foundProduct]);
            setupProductInteractions();
            highlightProduct(foundProduct.id);
        } else {
            productGrid.innerHTML = '<div class="no-results">No product found with that ID. Please try again.</div>';
        }
    }

    // Function to highlight the found product
    function highlightProduct(productId) {
        setTimeout(() => {
            const productElement = document.querySelector(`[data-id="${productId}"]`).closest('.product-item');
            productElement.classList.add('highlight');
            productElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }

    // Add event listeners for search
    searchButton.addEventListener('click', searchProducts);
    productSearch.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            searchProducts();
        }
    });

    // Real-time search as user types (with debounce)
    let debounceTimer;
    productSearch.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            if (productSearch.value.trim().length >= 3) {
                searchProducts();
            } else if (productSearch.value.trim().length === 0) {
                displayProducts(getTopPicks());
                setupProductInteractions();
            }
        }, 300);
    });


// Products Display

const products = [

  {
    id: 'WGG089',
    name: 'Mauve Opulence Sofa',
    category: 'Sofa',
    description: 'This product is available for order and customization.',
    image: 'images/lvs001.jpeg'
  },


  {
    id: 'EEO285',
    name: 'Marble Top Dining Table',
    category: 'Table',
    description: 'This product is available for order and customization.',
    image: 'https://th.bing.com/th/id/OIG2.LGfEUfv7GTQFxwrYNNE_?pid=ImgGn'
  },


  {
    id: 'PPH271',
    name: 'Tufted Leather Armchair',
    category: 'Chair',
    description: 'This product is available for order and customization.',
    image: 'https://th.bing.com/th/id/OIG2.V5CS8eySSivyBisD5Ykj?w=1024&h=1024&rs=1&pid=ImgDetMain'
  },



  {
    id: 'HYG576',
    name: 'White Clothing Swing',
    category: 'swing-chair-stand',
    description: 'This product is available for order and customization.',
    image: 'images/HYG576.png'
  },


  {
    id: 'XSC597',
    name: 'Brown Clothing Swing',
    category: 'swing-chair-stand',
    description: 'This product is available for order and customization.',
    image: 'images/XSC597.jpeg'
  },


  {
    id: 'UCJ924',
    name: 'Grey Clothing Swing',
    category: 'swing-chair-stand',
    description: 'This product is available for order and customization.',
    image: 'images/UCJ924.jpeg'
  },


  {
    id: 'SPV703',
    name: 'Red Clothing Swing',
    category: 'swing-chair-stand',
    description: 'This product is available for order and customization.',
    image: 'images/SPV703.jpeg'
  },


  {
    id: 'UEY004',
    name: 'Peach Clothing Swing',
    category: 'swing-chair-stand',
    description: 'This product is available for order and customization.',
    image: 'images/UEY004.png'
  },
  

  {
    id: 'UBT685',
    name: 'Lime Clothing Swing',
    category: 'swing-chair-stand',
    description: 'This product is available for order and customization.',
    image: 'images/UBT685.jpeg'
  },


  {
    id: 'ARR376',
    name: 'Smooth Fabric L-Sofa',
    category: 'L-shaped-sofa',
    description: 'This product is available for order and customization.',
    image: 'images/ARR376.jpeg'
  },


  {
    id: 'ACP403',
    name: 'Greyish Fabric L-Sofa',
    category: 'L-shaped-sofa',
    description: 'This product is available for order and customization.',
    image: 'images/ACP403.jpeg'
  },


  {
    id: 'KEA242',
    name: 'Fancy Fabric L-Sofa',
    category: 'L-shaped-sofa',
    description: 'This product is available for order and customization.',
    image: 'images/KEA242.jpeg'
  },


  {
    id: 'TZX826',
    name: 'Simple Fabric L-Sofa',
    category: 'L-shaped-sofa',
    description: 'This product is available for order and customization.',
    image: 'images/TZX826.jpeg'
  },


  {
    id: 'ZOE356',
    name: 'Minimal Fabric L-Sofa',
    category: 'L-shaped-sofa',
    description: 'This product is available for order and customization.',
    image: 'images/ZOE356.jpeg'
  },


  {
    id: 'OHS261',
    name: 'Luxurious Fabric L-Sofa',
    category: 'L-shaped-sofa',
    description: 'This product is available for order and customization.',
    image: 'images/OHS261.jpeg'
  },

];

    // Function to get top picks (first 3 products by default)
    function getTopPicks(count = 3) {
        return products.slice(0, count);
    }

    // Toggle mobile menu
    mobileMenu.onclick = () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('sidebar-open');
    };

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.onclick = (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
        };
    });

function displayProducts(productsToShow) {
    productGrid.innerHTML = productsToShow.map(product => `
        <div class="product-item">
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-id" title="Click to copy the ID">
                    <span class="product-id-label">ID:</span>
                    <span class="product-id-number" data-id="${product.id}">
                        ${product.id.split('').map((char, index) => `<span style="animation-delay: ${index * 0.1}s">${char}</span>`).join('')}
                    </span>
                    <span class="copy-tooltip">Click to copy the ID</span>
                </div>
                <div class="button-container">
                    <a href="purchase-process.html" class="purchase-btn" aria-label="Purchase ${product.name}">
                        <i class="fas fa-shopping-cart"></i>
                    </a>
                    <div class="purchase-arrow"></div>
                </div>
            </div>
        </div>
    `).join('');

        // Add click event listener to product IDs
        document.querySelectorAll('.product-id').forEach(idElement => {
            idElement.addEventListener('click', async function() {
                const idNumber = this.querySelector('.product-id-number');
                const id = idNumber.dataset.id;
                
                try {
                    // Copy the ID to clipboard
                    await navigator.clipboard.writeText(id);
                    
                    // Visual feedback
                    idNumber.style.animation = 'copyAnimation 0.5s ease';
                    
                    // Change tooltip text temporarily
                    const tooltip = this.querySelector('.copy-tooltip');
                    tooltip.textContent = 'Copied!';
                    setTimeout(() => {
                        tooltip.textContent = 'Click to copy the ID';
                    }, 2000);

                    // Reset animation after it completes
                    setTimeout(() => {
                        idNumber.style.animation = '';
                    }, 500);
                } catch (err) {
                    console.error('Failed to copy: ', err);
                }
            });
        });
    }

    // Function to filter and sort products
function filterAndSortProducts() {
    let filteredProducts = products;
    
    if (categoryFilter.value === 'top-picks') {
        filteredProducts = getTopPicks();
    } else {
        filteredProducts = filteredProducts.filter(product => {
            // Convert both to lowercase and replace spaces with hyphens for comparison
            const productCategory = product.category.toLowerCase().replace(/\s+/g, '-');
            const selectedCategory = categoryFilter.value.toLowerCase();
            return productCategory === selectedCategory;
        });
    }
    
    displayProducts(filteredProducts);
    setupProductInteractions();
    productSearch.value = ''; // Clear search input when changing category
}

    // Add event listener for category filter
    categoryFilter.addEventListener('change', filterAndSortProducts);

    // Initially display top picks
    displayProducts(getTopPicks());
    setupProductInteractions(); // Add this line

    // Handle form submissions
    [contactForm, newsletterForm].forEach(form => {
        form.onsubmit = (e) => {
            e.preventDefault();
            const message = form === contactForm 
                ? 'Thank you for your message. We will get back to you soon!'
                : 'Thank you for subscribing to our newsletter!';
            alert(message);
            form.reset();
        };
    });
});

function setupProductInteractions() {
    const productItems = document.querySelectorAll('.product-item');
    
    productItems.forEach(item => {
        const productInfo = item.querySelector('.product-info');
        const purchaseBtn = item.querySelector('.purchase-btn');
        const productId = item.querySelector('.product-id');
        const arrow = item.querySelector('.purchase-arrow');
        
        let arrowTimeout;

function showArrow() {
    setTimeout(() => {
        arrow.classList.add('show');
        setTimeout(() => {
            arrow.classList.add('pulse');
        }, 100);
    }, 300);  // Short delay before showing the arrow
    clearTimeout(arrowTimeout);
    arrowTimeout = setTimeout(() => {
        arrow.classList.remove('show', 'pulse');
    }, 5000);
}

        function hideArrow() {
            arrow.classList.remove('show', 'pulse');
            clearTimeout(arrowTimeout);
        }

        productInfo.addEventListener('click', (e) => {
            if (!purchaseBtn.contains(e.target) && !productId.contains(e.target)) {
                showArrow();
            }
        });

        item.querySelector('.product-image').addEventListener('click', showArrow);

        // Hide arrow when hovering over the purchase button
        purchaseBtn.addEventListener('mouseenter', hideArrow);
    });
}

// Add this to your existing JavaScript

const searchInput = $('product-search');
const searchSuggestions = $('search-suggestions');

function displaySearchSuggestions(suggestions) {
    searchSuggestions.innerHTML = suggestions.map(suggestion => `
        <div class="suggestion-item" data-id="${suggestion.id}">
            ${highlightMatch(suggestion.name, searchInput.value)}
            <span class="suggestion-id">(${suggestion.id})</span>
        </div>
    `).join('');
    searchSuggestions.style.display = suggestions.length ? 'block' : 'none';
}

function highlightMatch(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="highlight-match">$1</span>');
}

searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    if (query.length >= 2) {
        const suggestions = products.filter(product => 
            product.name.toLowerCase().includes(query) || 
            product.id.toLowerCase().includes(query)
        ).slice(0, 5);
        displaySearchSuggestions(suggestions);
    } else {
        searchSuggestions.style.display = 'none';
    }
});

searchSuggestions.addEventListener('click', (e) => {
    const suggestionItem = e.target.closest('.suggestion-item');
    if (suggestionItem) {
        const productId = suggestionItem.dataset.id;
        searchInput.value = productId;
        searchSuggestions.style.display = 'none';
        searchProducts();
    }
});

document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
        searchSuggestions.style.display = 'none';
    }
});

// Modify the existing searchProducts function
function searchProducts() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    let foundProducts = products.filter(product => 
        product.id.toLowerCase() === searchTerm || 
        product.name.toLowerCase().includes(searchTerm)
    );

    if (foundProducts.length) {
        displayProducts(foundProducts);
        setupProductInteractions();
        highlightProduct(foundProducts[0].id);
    } else {
        productGrid.innerHTML = '<div class="no-results">No products found. Please try a different search term.</div>';
    }
}

        // Create animated background elements
        const animatedBg = document.querySelector('.animated-bg');
        for (let i = 0; i < 10; i++) {
            const span = document.createElement('span');
            span.style.left = Math.random() * window.innerWidth + 'px';
            span.style.top = Math.random() * window.innerHeight + 'px';
            span.style.width = Math.random() * 30 + 10 + 'px';
            span.style.height = span.style.width;
            span.style.animationDelay = Math.random() * 5 + 's';
            animatedBg.appendChild(span);
        }

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

