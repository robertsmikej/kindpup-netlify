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
        if (item.shown || item.status === 'published' && item.sort_number !== null) {
            newdata.push(item);
        }
    }
    newdata.sort(function (a, b) {
        return a.sort - b.sort;
    });
    return newdata;
}

export const mutations = {
    setPages(state, data) {
        for (var page in data) {
            state.pages[data[page].slug] = data[page];
        }
    },
    setNav(state, data) {
        state.nav = sortItems(data);
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