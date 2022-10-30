<div class="gugu"></div>

第 $N$ 次无视上限翻牌将消耗 $40000 \times 2^N$ 贝壳。  
搜刮奖励= $400 \times N^2+\text{进度} \times (50+N^2)$  （进度取整数值，$N$ 为段位系数，C为1，SSS为12，依此类推）  
收益浮动= $\text{random}(0.8,1.2)$  
经验收益= $\text{搜刮奖励} \times \text{收益浮动} \times (1+ \text{许愿池经验强化} \times 0.03+0.1 \text{(SVIP加成)})$  
贝壳收益= $\text{搜刮奖励} \times \text{收益浮动} \times (1+ \text{许愿池贝壳强化} \times 0.03+0.1 \text{(SVIP加成)}) \times 1.2$  
具体如下：（ $n$ 为许愿次数）  
获得点数= $n$  
总点数= $\frac{n(n+1)}{2}$  
花费贝壳= $100 \times 3^{n-1}$  
累计花费贝壳= $100 \times \frac{3^n-1}{2}$  

<link rel="dns-prefetch" href="http://cdn.mathjax.org">
<script type="text/javascript" async src="https://cdn.bootcss.com/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
<script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
<script type="text/x-mathjax-config">MathJax.Hub.Config({ tex2jax: {inlineMath: [['$','$'], ['(',')']]} });</script>
