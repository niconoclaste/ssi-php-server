<?php $variable = 'PHP使えるよー' ?>

<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>PHP テスト</title>
  </head>
  <body>

    <h1>PHP テスト</h1>

    <?php echo 'ただのechoのテスト'; ?>

    <p>php インクルードファイル : [include.php]</p>
    <?php include "include.php"; ?>

    <p>[include.php]でセットした [incVar] の変数は : <?php echo $incVar; ?></p>


    <p>[variable] 変数は 'PHP使える' ? <br>
    <?php if($variable === 'PHP使える'){ ?>
      <strong>合ってる！</strong>  
    <?php }else{ ?>
      <strong>違う、、、</strong>中身は : '<?php echo $variable; ?>'
    <?php } ?>
    </p>


    <p>
    <?php
      if(isset($_GET['test'])){
        echo 'URLの [test] パラメーターは： '.$_GET['test'];
      }else{
        echo 'URLに [test] パラメーターを追加してみて!';
      }
    ?>
    </p>

    <form method="post">
      <input type="text" name="input"><br>
      <button type="submit">SUBMIT</button>
    </form>

    <p>
    <?php
      if(isset($_POST['input'])){
        echo '入力内容は：'.$_POST['input'];
      }
    ?>
    </p>


  </body>
</html>