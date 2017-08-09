function replaceYumlDiagram(state, tagInfo, content) {
    let diagramText = content.replace(/\n/g, ",");
    let url = "https://yuml.me/diagram/scruffy/class/" +
        encodeURIComponent(diagramText);

    let token = state.push('yuml-diagram-open', 'img', 1);
    token.attrs = [['src', url], ['class', 'yuml']];    
    state.push('yuml-diagram-close', 'img', -1);

    return true;
}

export function setup(helper) {
    helper.whiteList(['img.yuml']);

    helper.registerPlugin(md => {
        const rule = {
            tag: 'yuml',            
            replace: replaceYumlDiagram
        };

        md.block.bbcode.ruler.push('discourse-yuml', rule);
    });
}