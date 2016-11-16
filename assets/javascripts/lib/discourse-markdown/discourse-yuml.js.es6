import { registerOption  } from 'pretty-text/pretty-text'

registerOption((siteSettings, opts) => {
  opts.features["discourse-yuml"] = true;
});

function replaceYumlDiagram (text) {
    while (text !== (text = text.replace(/\[yuml\]([\s\S]*)\[\/yuml\]/ig, function (match, contents) {
        var uri = "http://yuml.me/diagram/scruffy/class/" + encodeURIComponent(contents.replace(/\n/g, ","));
        return "<img src=\"" + uri + "\" />";
    })));
    return text;
}

export function setup(helper) {
    helper.whiteList(['img']);
    helper.addPreProcessor(text => replaceYumlDiagram(text));
}
