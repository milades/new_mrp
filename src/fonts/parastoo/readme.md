<h1 id="parastoo-font">Parastoo Font</h1>
<p>A Persian (Farsi) Font</p>
<p dir="rtl">فونت (قلم) فارسی پرستو</p>
<p dir="rtl"><a href="http://rastikerdar.github.io/parastoo-font/">نمایش فونت</a></p>
<p dir="rtl">با تشکر از برنامه <a href="https://fontforge.github.io">FontForge</a></p>
<p dir="rtl">بر مبنای فونت <a href="http://rastikerdar.github.io/gandom-font/" dir="rtl">گندم</a></p>
<h2 id="-" dir="rtl">طریقه استفاده در صفحات وب:</h2>
<div lang="fa" dir="rtl">
کد زیر را در قسمت style یا فایل css وارد نمایید:
</div>


```css
@font-face {
  font-family: Parastoo;
  src: url('Parastoo.eot');
  src: url('Parastoo.eot?#iefix') format('embedded-opentype'),
       url('Parastoo.woff') format('woff'),
       url('Parastoo.ttf') format('truetype');
  font-weight: normal;
}

@font-face {
  font-family: Parastoo;
  src: url('Parastoo-Bold.eot');
  src: url('Parastoo-Bold.eot?#iefix') format('embedded-opentype'),
       url('Parastoo-Bold.woff') format('woff'),
       url('Parastoo-Bold.ttf') format('truetype');
  font-weight: bold;
}
```
