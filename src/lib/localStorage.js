

export const saveToLs = (key, value) => {
    if (!global.localStorage) {return}
    const storage = JSON.parse(global.localStorage.getItem('dash_draggable'))
    global.localStorage.setItem(
        `dash_draggable`,
        JSON.stringify({
            ...storage,
            [key]: value
        })
    );
}

export const getFromLs = (key) => {
    let ls = {};
    if (!global.localStorage) {return {}}
    try {
        ls = JSON.parse(global.localStorage.getItem(`dash_draggable`)) || {};
    } catch (e) {
        /* Ignore */
    }
    return ls[key];
  }
    
