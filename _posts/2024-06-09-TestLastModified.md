---
layout: post
title:  "创建Action流以实现githubPage上插件的正常运行"
date:   2024-06-09 14:07:00 +0800
categories: last-modified
---

*摘要：实现插件在GithubPage上的正常部署。*

Test `Jekyll-last-modified-at` 插件

Post last updated at {{ page.last_modified_at | date: "%Y-%m-%d %H:%M:%S" }}

---
{%raw%}

# 正文部分

## 问题发现

在正常情况下，我们新增的插件会随着`bundle exec jekyll serve`正常显示在本地服务器。但是当页面上传到Github-Page时，插件就无法正常工作了。经过研究，事实上是Github默认的Jekyll版本比较落后导致的。

## 问题解决

1. 在`Settings`的`Pages`内将之前设置的`source`源改为`Github Actions`，选择`Jekyll`生成特定路径`workflows`的`jekyll.yml`并保存和提交更改。
2. 过一会发现`Action`流出错，检查错误后发现是`Setup Ruby`部分出错，报错信息为：`Error: The process '/opt/hostedtoolcache/Ruby/3.1.4/x64/bin/bundle' failed with exit code 16`。
3. 所以更改一下`jekyll.yml`文件中的`Setup Ruby`部分为：
   
   ```yml
   - name: Setup Ruby
        uses: ruby/setup-ruby@v1 # v1
        with:
            ruby-version: '3.1' # Not needed with a .ruby-version file
   ```

   注意缩进。这里修改了`@`后面的内容为`v1`，之前的代码代表根据用户配置改变，可能会导致一些bug，如之前的报错（虽然也有`bundle`没有正确`install`的原因在）。这里的`@v1`表示根据最新`Ruby`进行`Setup`，更有稳定性，但是需要自己维护好自己的`Ruby`版本以及本地代码。
4. 除此之外，添加新的`name`以及操作在`Setup Ruby`之后：
   
   ```yml
   - name: Cache bundle
        uses: actions/cache@v3
        with:
            path: vendor/bundle
            key: ${{ runner.os }}-bundle-${{ hashFiles('**/Gemfile.lock') }}
            restore-keys: |
              ${{ runner.os }}-bundle-
    
    - name: Install Bundler
        run: gem install bundler
    
    - name: Configure bundler path
        run: bundle config set path 'vendor/bundle'
      
    - name: Install dependencies
        run: bundle install
   ```

   同样注意缩进。这些的作用是安装`Gem`以及`Bundle`，同时缓存一下`install`的结果到指定路径，这样在更新页面时`action`不会一直重新下载`gem`，而是根据缓存内容动态下载。

5. 修改完`commit`后发现，虽然插件可以使用，但是时间的更新不对，每次更新都随着整个网站的改变而改变，然而我们需要的是某个页面的更新时间。
   
   检查后发现，修改`jekyll.yml`中`- name: Checkout`部分的内容为：

   ```yml
   - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0  # Ensure the entire history is fetched for `jekyll-last-modified-at`
   ```

   这里设置了`fetch-depth`为`0`，保证每一次提交历史都被遍历，这样就可以正确更新`last-modified-at`了。
6. 经过验证，插件生效且正确。

{%endraw%}