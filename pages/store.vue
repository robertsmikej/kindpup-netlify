<template>
    <section class="container">
        <Hero :heroSlides="page.hero" :heroOptions="page.hero_options"/>
        <div class="store__container">
            <!-- <div id='collection-component-1575936425585'></div> -->
            <!-- <div :id="'collection-component-' + sitewide.comp_code"></div> -->
            <div v-html="storeScript"></div>
        </div>
    </section>
</template>

<script>
import Hero from '~/components/sitewide/Hero.vue'

export default {
    components: {
        Hero
        
    },
    computed: {
        page: function () {
            return this.$store.state.pages.store
        },
        sitewide: function () {
            return this.$store.state.sitewide;
        }
    },
    data() {
        return {
            componentID: "",
            storeScript: ``
        }
    },
    head () {
        return {
            // script: [
            //     { src: 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js' }
            // ],
            title: "Kind Pup | Store",
            meta: [
                { 
                    hid: 'description',
                    name: 'description',
                    content: "Our CBD is the Dog-Gone best!",
                    hid: 'robots', name: 'robots', content: 'index, follow'
                }
            ]
        }
    },
    created() {
        const code = this.sitewide.site_code.page_code;

        if (process.browser) {
                // if (code.indexOf("function ShopifyBuyInit() {") >= 0) {
                //     this.storeScript = code.split("function ShopifyBuyInit() {")[1].split("})();")[0];
                // }
            this.storeScript = code;

//     var client = ShopifyBuy.buildClient({
//       domain: 'kind-pup.myshopify.com',
//       storefrontAccessToken: '29db04f742abd5d9d37a142e6771695c',
//     });
//     ShopifyBuy.UI.onReady(client).then(function (ui) {
//       ui.createComponent('collection', {
//         id: '156738289796',
//         node: document.getElementById('collection-component-1575946024113'),
//         moneyFormat: '%24%7B%7Bamount%7D%7D',
//         options: {
//   "product": {
//     "styles": {
//       "product": {
//         "@media (min-width: 601px)": {
//           "max-width": "calc(25% - 20px)",
//           "margin-left": "20px",
//           "margin-bottom": "50px",
//           "width": "calc(25% - 20px)"
//         },
//         "img": {
//           "height": "calc(100% - 15px)",
//           "position": "absolute",
//           "left": "0",
//           "right": "0",
//           "top": "0"
//         },
//         "imgWrapper": {
//           "padding-top": "calc(75% + 15px)",
//           "position": "relative",
//           "height": "0"
//         }
//       },
//       "button": {
//         "font-size": "16px",
//         "padding-top": "16px",
//         "padding-bottom": "16px",
//         ":hover": {
//           "background-color": "#e18e0c"
//         },
//         "background-color": "#fa9e0d",
//         ":focus": {
//           "background-color": "#e18e0c"
//         },
//         "border-radius": "4px",
//         "padding-left": "56px",
//         "padding-right": "56px"
//       },
//       "quantityInput": {
//         "font-size": "16px",
//         "padding-top": "16px",
//         "padding-bottom": "16px"
//       },
//       "price": {
//         "font-size": "15px"
//       },
//       "compareAt": {
//         "font-size": "12.75px"
//       }
//     },
//     "buttonDestination": "modal",
//     "contents": {
//       "options": false
//     },
//     "text": {
//       "button": "View product"
//     }
//   },
//   "productSet": {
//     "styles": {
//       "products": {
//         "@media (min-width: 601px)": {
//           "margin-left": "-20px"
//         }
//       }
//     }
//   },
//   "modalProduct": {
//     "contents": {
//       "img": false,
//       "imgWithCarousel": true,
//       "button": false,
//       "buttonWithQuantity": true
//     },
//     "styles": {
//       "product": {
//         "@media (min-width: 601px)": {
//           "max-width": "100%",
//           "margin-left": "0px",
//           "margin-bottom": "0px"
//         }
//       },
//       "button": {
//         "font-size": "16px",
//         "padding-top": "16px",
//         "padding-bottom": "16px",
//         ":hover": {
//           "background-color": "#e18e0c"
//         },
//         "background-color": "#fa9e0d",
//         ":focus": {
//           "background-color": "#e18e0c"
//         },
//         "border-radius": "4px",
//         "padding-left": "56px",
//         "padding-right": "56px"
//       },
//       "quantityInput": {
//         "font-size": "16px",
//         "padding-top": "16px",
//         "padding-bottom": "16px"
//       }
//     },
//     "text": {
//       "button": "Add to cart"
//     }
//   },
//   "cart": {
//     "styles": {
//       "button": {
//         "font-size": "16px",
//         "padding-top": "16px",
//         "padding-bottom": "16px",
//         ":hover": {
//           "background-color": "#e18e0c"
//         },
//         "background-color": "#fa9e0d",
//         ":focus": {
//           "background-color": "#e18e0c"
//         },
//         "border-radius": "4px"
//       }
//     },
//     "text": {
//       "total": "Subtotal",
//       "button": "Checkout"
//     },
//     "contents": {
//       "note": true
//     },
//     "popup": false
//   },
//   "toggle": {
//     "styles": {
//       "toggle": {
//         "background-color": "#fa9e0d",
//         ":hover": {
//           "background-color": "#e18e0c"
//         },
//         ":focus": {
//           "background-color": "#e18e0c"
//         }
//       },
//       "count": {
//         "font-size": "16px"
//       }
//     }
//   }
// },
//       });
//     });



        }
    }
}
</script>

<style>
.store__container {
    margin: 50px auto;
    width: 100%;
    max-width: 1200px;
}
.contact__page__form__container {
    padding: 0vh 20px;
    max-width: 800px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
}
.contact__form__header {
    color: #FCA24D;
    margin: 0 0 30px;
    font-size: 1.4em;
    line-height: 1.4em;
}
</style>