<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!--Title-->
        <title>juanjimeneztj.com &#124; CountDown</title>
        
    </head><!--End head-->
    <body>
        <h1>CountDown Example</h1>
        <div id="gswebCountDown" gsweb-date="Jan 1, <?=date('Y')+1 ?> 00:00:00" labels="true"></div>
        
        <h3>Use:</h3>
        <p>Add the next line where you want use the counter:</p>
        <p><em>&lt;div id="gswebCountDown" gsweb-date="Feb 18, 2019 15:37:25" labels="true"&gt;&lt;/div&gt;</em></p>
        
        <h3>Script required</h3>
        <p>&lt;script src="../path/gswebCountDown.min.js"&gt;&lt;/script&gt;</p>
        <p>Or you can use this from us server</p>
        <p>&lt;script src="https://juanjimeneztj.com/plugins/gswebCountDown3.0.0/gswebCountDown.min.js"&gt;&lt;/script&gt;</p>
        
        <h3>Attributes:</h3>
        <p><strong>gsweb-date="Feb 18, 2019 15:37:25"</strong><em> - Attribute required with the date format indicated.</em></p>
        <p><strong>labels="true"</strong><em> - if you want show the labels you need add the attribute labels with the value <strong>true</strong>, if you dont need the labels you can put this attribute in <strong>false</strong> value or <strong>delete this attribute</strong>.</em></p>
        
        <script src="gswebCountDown.min.js"></script>
    </body><!--End body-->
</html><!--End html-->