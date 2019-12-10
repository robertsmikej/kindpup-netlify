export const state = () => ({
    pages: {},
    nav: [],
    sitewide: {}
});

function sortItems(data) {
    let newdata = [];
    for (var d in data) {
        let keys = Object.keys(newdata);
        let item = data[d];
        //if (item.shown || item.status || item.status === 'published' && item.sort_number !== null) {
        if (item.shown || item.status || item.status === 'published') {
            newdata.push(item);
        }
    }
    return newdata;
}

export const mutations = {
    setPages(state, data) {
        for (var page in data) {
            state.pages[data[page].page_name] = data[page];
        }
        for (var page in data) {
            state.pages[data[page].slug.toLowerCase().replace(/ /g, "_").replace(/-/g, "_")] = data[page];
        }
    },
    setNav(state, data) {
        var checkLive = sortItems(data);
        var populate = checkLive[0].nav_items;
        state.nav = populate;
    },
    setSitewide(state, data) {
        state.sitewide = data[0];
    }
};

export const actions = {
    async nuxtServerInit({ commit }) {
        let sitewideFiles = await require.context('~/assets/content/sitewide/', false, /\.json$/);
        let sitewides = sitewideFiles.keys().map(key => {
            let res = sitewideFiles(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setSitewide', sitewides);

        var d = await require.context('~/assets/content/pages/', false, /\.json$/);
        var f = d.keys().map(key => {
            let res = d(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setPages', f);

        let navfiles = await require.context('~/assets/content/nav/', false, /\.json$/);
        let navs = navfiles.keys().map(key => {
            let res = navfiles(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setNav', navs);
    }
};