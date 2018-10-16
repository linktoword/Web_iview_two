let util = {
    
};
util.title = function (title) {
    title = title ? title + ' - Home' : 'LED显示集群控制系统';
    window.document.title = title;
};

export default util;