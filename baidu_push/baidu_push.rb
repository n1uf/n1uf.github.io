require 'net/http'
urls = [
    'https://www.niuf.rf.gd',
]
uri = URI.parse('http://data.zz.baidu.com/urls?site=https://www.niuf.rf.gd&token=vNniBheWXxk4oK3O')
req = Net::HTTP::Post.new(uri.request_uri)
req.body = urls.join("\n")
req.content_type = 'text/plain'
res = Net::HTTP.start(uri.hostname, uri.port) { |http| http.request(req) }
puts res.body