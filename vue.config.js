module.exports = {
   
        publicPath: process.env.NODE_ENV === 'production'
          ? '/Vue-dashboard/'
          : '/',
      
    css: {
        loaderOptions: {
            scss: {
                additionalData : `@import "@/scss/style.scss";`,
            },
        },
    },
};