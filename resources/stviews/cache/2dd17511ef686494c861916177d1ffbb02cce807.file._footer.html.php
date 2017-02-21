<?php /* Smarty version Smarty-3.1.15, created on 2016-11-10 08:53:20
         compiled from "E:\wamp\www\tangram\resources\views\_footer.html" */ ?>
<?php /*%%SmartyHeaderCode:2341758243580e27b81-20213633%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '2dd17511ef686494c861916177d1ffbb02cce807' => 
    array (
      0 => 'E:\\wamp\\www\\tangram\\resources\\views\\_footer.html',
      1 => 1478761845,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2341758243580e27b81-20213633',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'site_url' => 0,
    'foot_navs' => 0,
    'nav' => 0,
    'footprint' => 0,
    'footscript' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.15',
  'unifunc' => 'content_58243580e62512_13726873',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_58243580e62512_13726873')) {function content_58243580e62512_13726873($_smarty_tpl) {?><div id="footer_bg">
    <div id="footer" class="wrapper">
        <a href="<?php echo $_smarty_tpl->tpl_vars['site_url']->value;?>
">首页</a> | <?php  $_smarty_tpl->tpl_vars['nav'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['nav']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['foot_navs']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['nav']->key => $_smarty_tpl->tpl_vars['nav']->value) {
$_smarty_tpl->tpl_vars['nav']->_loop = true;
?>
        <a href="<?php echo $_smarty_tpl->tpl_vars['nav']->value['link'];?>
"><?php echo $_smarty_tpl->tpl_vars['nav']->value['name'];?>
</a> | <?php } ?>
        <br /> <?php echo $_smarty_tpl->tpl_vars['footprint']->value;?>
 
    </div>
</div>
<?php echo $_smarty_tpl->tpl_vars['footscript']->value;?>

<?php }} ?>
