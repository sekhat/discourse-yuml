function getDiagramType(tagInfo) {
    switch (tagInfo.attrs["type"]) {
        case "activity":
            return "activity";

        case "usecase":
            return  "usecase"

        case "class":
        default:
            return "class";
    }
}

function getDiagramStyle(tagInfo) {
    switch (tagInfo.attrs["style"]) {
        case "boring":
            return "nofunky";
        
        case "plain":
            return "plain";
        
        case "scruffy":
        default:
            return "scruffy";
    }
}

function replaceYumlDiagram(state, tagInfo, content) {
    let diagramType = getDiagramType(tagInfo);
    let diagramStyle = getDiagramStyle(tagInfo);
    let diagramText = content.replace(/\n/g, ",");
    let url = `https://yuml.me/diagram/${diagramStyle}/${diagramType}/${encodeURIComponent(diagramText)}`;

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