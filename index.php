<!DOCTYPE html>
<html lang="en">
  <?php include('includes/head.inc'); ?>
  <body class="home">
    <div class="full-screen">
      <?php //include('includes/nav.inc'); ?>
      <div class="clock">
        <h2><!-- 12:46:34 --><?php echo gmdate ("h:i:s");?></h2>
      </div>
    </div>
    <?php //include('includes/footer.inc'); ?>
    <script type="text/javascript" src="/assets/js/home.js"></script>
  </body>
</html>