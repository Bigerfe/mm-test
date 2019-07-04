## 命令行-短命令工具
```
工作中我们有很多地方需要用到命令行来完成，有些命令较长，而且经常使用，全部敲出来势必会浪费很多时间。

所以开发一个简单的短命令工具，帮助我们提高工作效率。

也包括一些手动不需要命令行完成的操作也可以使用命令来代替。

```

### git 支持
```
mm gac 描述 --> git add . git commit 
mm gcp 描述 --> git add . git commit git push
mm gst     --> git status
mm gdf     --> git diff
mm gck     --> git checkout branch
mm gba     --> git branch -a
```

### ip 支持
```
mm ip 获取本机ip
```


### 环境支持
```
基于 node8.5+
```

### 安装
```
npm install mm-short-command -g
```

## 更多命令持续更新中......