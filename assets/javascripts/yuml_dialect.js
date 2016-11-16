(function() {

    if (Discourse.dialect_deprecated) {
        return;
    }

    function replaceYumlDiagram (text) {
        while (text !== (text = text.replace(/\[yuml\](.*?)\[\/yuml\]/ig, function (match, contents) {
            var uri = "http://yuml.me/diagram/scruffy/class/" + encodeURIComponent(contents.replace(/\n/g, ","));
            return "<img src=\"" + uri + "\" />";
        })));
        return text;
    }

    Discourse.Dialect.addPreProcessor(replaceYumlDiagram);
    Discourse.Markdown.whiteListTag('img');
})();
