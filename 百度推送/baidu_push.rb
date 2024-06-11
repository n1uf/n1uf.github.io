require 'net/http'
urls = [
    'https://www.niuf.rf.gd',
    'https://www.niuf.rf.gd/function/2024/06/01/AdditionalFunctions.html', 
    'https://www.niuf.rf.gd/cloud-drive/2024/06/01/quark-cloud-share.html',
    'https://www.niuf.rf.gd/game/2024/06/10/CardGame.html',
    'https://www.niuf.rf.gd/last-modified/2024/06/09/TestLastModified.html',
    'https://www.niuf.rf.gd/2024/06/04/Heart.html', 
    'https://www.niuf.rf.gd/footer/bilibili/2024/06/02/SocialAdd.html',
    'https://www.niuf.rf.gd/topfunction/2024/06/02/TopFunction.html',
    'https://www.niuf.rf.gd/latex/formula/2024/06/01/LatexFormulaDisplay.html',
    'https://www.niuf.rf.gd/code-add/2024/05/31/CodeTest.html',
    'https://www.niuf.rf.gd/jekyll/github/windows/2024/05/30/CreatAGithubPage.html'
]
uri = URI.parse('http://data.zz.baidu.com/urls?site=https://www.niuf.rf.gd&token=vNniBheWXxk4oK3O')
req = Net::HTTP::Post.new(uri.request_uri)
req.body = urls.join("\n")
req.content_type = 'text/plain'
res = Net::HTTP.start(uri.hostname, uri.port) { |http| http.request(req) }
puts res.body