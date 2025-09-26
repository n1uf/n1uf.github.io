// 现代化交互功能
document.addEventListener('DOMContentLoaded', function() {
  
  // 滚动进度条
  const scrollProgress = document.createElement('div');
  scrollProgress.className = 'scroll-progress';
  document.body.appendChild(scrollProgress);
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
  });
  
  // 回到顶部按钮
  const backToTop = document.createElement('button');
  backToTop.className = 'back-to-top';
  backToTop.innerHTML = '↑';
  backToTop.setAttribute('aria-label', '回到顶部');
  document.body.appendChild(backToTop);
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });
  
  backToTop.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // 导航栏滚动效果
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
  
  // 图片懒加载
  const images = document.querySelectorAll('img');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.classList.remove('loading');
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => {
    img.classList.add('loading');
    imageObserver.observe(img);
  });
  
  // 代码块复制功能
  const codeBlocks = document.querySelectorAll('pre code');
  codeBlocks.forEach(block => {
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block';
    block.parentNode.insertBefore(wrapper, block);
    wrapper.appendChild(block);
    
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.textContent = '复制';
    copyBtn.setAttribute('aria-label', '复制代码');
    wrapper.appendChild(copyBtn);
    
    copyBtn.addEventListener('click', async function() {
      try {
        await navigator.clipboard.writeText(block.textContent);
        copyBtn.textContent = '已复制!';
        setTimeout(() => {
          copyBtn.textContent = '复制';
        }, 2000);
      } catch (err) {
        console.error('复制失败:', err);
      }
    });
  });
  
  // 平滑滚动到锚点
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // 文章卡片悬停效果
  const postCards = document.querySelectorAll('.post-card');
  postCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
  
  // 主题切换功能增强
  const themeButtons = document.querySelectorAll('#toggleButton, #footerThemeToggle');
  themeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // 更新按钮文本
      const themeText = this.querySelector('.theme-text') || this;
      if (themeText) {
        themeText.textContent = newTheme === 'dark' ? '切换到日间模式' : '切换到夜间模式';
      }
      
      // 更新图标
      const themeIcon = this.querySelector('.theme-icon');
      if (themeIcon) {
        themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
      }
    });
  });
  
  // 初始化主题
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  // 阅读进度指示器
  const readingProgress = document.createElement('div');
  readingProgress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: var(--primary-gradient);
    z-index: 1000;
    transition: width 0.1s ease;
  `;
  document.body.appendChild(readingProgress);
  
  // 文章页面阅读进度
  if (document.querySelector('.post-content')) {
    window.addEventListener('scroll', function() {
      const article = document.querySelector('.post-content');
      if (article) {
        const articleTop = article.offsetTop;
        const articleHeight = article.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset;
        
        const progress = Math.min(
          Math.max((scrollTop - articleTop + windowHeight) / articleHeight, 0),
          1
        );
        
        readingProgress.style.width = (progress * 100) + '%';
      }
    });
  }
  
  // 添加页面加载完成动画
  document.body.classList.add('loaded');
  
  // 目录高亮当前章节
  function highlightCurrentSection() {
    const tocLinks = document.querySelectorAll('.toc-list a');
    const sections = document.querySelectorAll('.post-content h2, .post-content h3');
    
    if (tocLinks.length === 0 || sections.length === 0) return;
    
    let currentSection = '';
    
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100) { // 距离顶部100px以内
        currentSection = section.id;
      }
    });
    
    // 移除所有高亮
    tocLinks.forEach(link => {
      link.classList.remove('active');
    });
    
    // 高亮当前章节
    if (currentSection) {
      const activeLink = document.querySelector(`.toc-list a[href="#${currentSection}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  }
  
  // 监听滚动事件
  window.addEventListener('scroll', highlightCurrentSection);
  
  // 初始化高亮
  highlightCurrentSection();
  
  console.log('🚀 现代化交互功能已加载完成！');
});
