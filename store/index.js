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
        if (item.status === 'published' && item.sort_number !== null) {
            newdata.push(item);
        }
    }
    newdata.sort(function (a, b) {
        return a.sort_number - b.sort_number;
    });
    return newdata;
}

export const mutations = {
    setPages(state, data) {
        for (var page in data) {
            state.pages[data[page].page_name] = data[page];
        }
    },
    setNav(state, data) {
        state.navItems = sortItems(data);
    },
    setSitewide(state, data) {
        state.sitewide = data;
    }
};

function getData(files) {
    var f = files.keys().map(key => {
        let res = files(key);
        res.slug = key.slice(2, -5);
        return f;
    });
}

export const actions = {
    async nuxtServerInit({ commit }) {
        // var files = await require.context('~/assets/content/page/', false, /\.json$/);
        // var file = files.keys().map(key => {
        //     let res = files(key);
        //     res.slug = key.slice(2, -5);
        //     return res;
        // });
        // await commit('setPages', file);

        // let navfiles = await require.context('~/assets/content/nav/', false, /\.json$/);
        // let navs = navfiles.keys().map(key => {
        //     let res = navfiles(key);
        //     res.slug = key.slice(2, -5);
        //     return res;
        // });
        // await commit('setNav', navs);

        // let sitewideFiles = await require.context('~/assets/content/sitewide/', false, /\.json$/);
        // let sitewides = sitewideFiles.keys().map(key => {
        //     let res = sitewideFiles(key);
        //     res.slug = key.slice(2, -5);
        //     return res;
        // });
        // await commit('setSitewide', sitewides[0]);
    }
};