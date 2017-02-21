<?php /* Smarty version Smarty-3.1.15, created on 2016-11-10 08:53:06
         compiled from "E:\wamp\www\tangram\resources\views\_header.html" */ ?>
<?php /*%%SmartyHeaderCode:17117582435723a4f01-82423882%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '3025ef1a41b9b0ff74f5a71197c18ae9be523e25' => 
    array (
      0 => 'E:\\wamp\\www\\tangram\\resources\\views\\_header.html',
      1 => 1478766727,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '17117582435723a4f01-82423882',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'logo' => 0,
    'search_action' => 0,
    'telephone' => 0,
    'navs' => 0,
    'limit' => 0,
    'site_url' => 0,
    'nav' => 0,
    'nav_list' => 0,
    'slidepics' => 0,
    'slidepic' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.15',
  'unifunc' => 'content_582435724c6047_84090676',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_582435724c6047_84090676')) {function content_582435724c6047_84090676($_smarty_tpl) {?><div id="header_bg"> 
    <div id="header" class="wrapper">
        <div id="logo"><img src="<?php echo $_smarty_tpl->tpl_vars['logo']->value['img'];?>
" alt="<?php echo $_smarty_tpl->tpl_vars['logo']->value['title'];?>
" /></div>
        <div id="search">
            <form action="<?php echo $_smarty_tpl->tpl_vars['search_action']->value;?>
" method="GET">
                <input type="text" name="s" value="" class="sa" />
                <input type="submit" class="bta" />
            </form>
        </div>
        <div id="tel"><?php echo $_smarty_tpl->tpl_vars['telephone']->value;?>
</div>
    </div>
</div>

<div id="nav_bg">
    <div id="nav" class="wrapper">
        <ul>
            <?php $_smarty_tpl->tpl_vars['limit'] = new Smarty_variable(7, null, 0);?>
            <?php if (count($_smarty_tpl->tpl_vars['navs']->value)<$_smarty_tpl->tpl_vars['limit']->value) {?><?php $_smarty_tpl->tpl_vars['limit'] = new Smarty_variable(count($_smarty_tpl->tpl_vars['navs']->value), null, 0);?><?php }?>
            <li class="aa" style="width:<?php echo 100/($_smarty_tpl->tpl_vars['limit']->value+1);?>
%">
                <a href="<?php echo $_smarty_tpl->tpl_vars['site_url']->value;?>
">首页</a>
            </li>
            <?php  $_smarty_tpl->tpl_vars['nav'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['nav']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['navs']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
 $_smarty_tpl->tpl_vars['nav']->index=-1;
foreach ($_from as $_smarty_tpl->tpl_vars['nav']->key => $_smarty_tpl->tpl_vars['nav']->value) {
$_smarty_tpl->tpl_vars['nav']->_loop = true;
 $_smarty_tpl->tpl_vars['nav']->index++;
?>
            <li class="fl<?php if ($_smarty_tpl->tpl_vars['nav']->value['current']) {?> current<?php }?> aa" style="width:<?php echo 100/($_smarty_tpl->tpl_vars['limit']->value+1);?>
%">
                <a href="<?php echo $_smarty_tpl->tpl_vars['nav']->value['link'];?>
"><?php echo $_smarty_tpl->tpl_vars['nav']->value['name'];?>
</a>
                <ul class="sub clearfix">
                    <?php if ($_smarty_tpl->tpl_vars['nav']->value['childmenu']) {?> <?php  $_smarty_tpl->tpl_vars['nav_list'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['nav_list']->_loop = false;
 $_smarty_tpl->tpl_vars['key'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['nav']->value['childmenu']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['nav_list']->key => $_smarty_tpl->tpl_vars['nav_list']->value) {
$_smarty_tpl->tpl_vars['nav_list']->_loop = true;
 $_smarty_tpl->tpl_vars['key']->value = $_smarty_tpl->tpl_vars['nav_list']->key;
?>
                    <li class="<?php if ($_smarty_tpl->tpl_vars['nav']->value['current']) {?>current<?php }?> cc"><a href="<?php echo $_smarty_tpl->tpl_vars['nav_list']->value['link'];?>
"><?php echo $_smarty_tpl->tpl_vars['nav_list']->value['name'];?>
</a></li>
                    <?php } ?> <?php }?>
                </ul>
            </li>
            <?php if ($_smarty_tpl->tpl_vars['nav']->index+1==$_smarty_tpl->tpl_vars['limit']->value) {?><?php break 1?><?php }?>
            <?php } ?>
        </ul>
    </div>
</div>






<div id="banner" class="wrapper">
    <div id="kinMaxShow" style="display:none;"> 
<?php  $_smarty_tpl->tpl_vars['slidepic'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['slidepic']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['slidepics']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['slidepic']->key => $_smarty_tpl->tpl_vars['slidepic']->value) {
$_smarty_tpl->tpl_vars['slidepic']->_loop = true;
?>
      <div> <a href="<?php echo $_smarty_tpl->tpl_vars['slidepic']->value['url'];?>
" target="_blank"><img src="<?php echo $_smarty_tpl->tpl_vars['slidepic']->value['img'];?>
" alt="<?php echo $_smarty_tpl->tpl_vars['slidepic']->value['title'];?>
"  /></a></div>
      <?php } ?> </div>
</div>
<?php }} ?>
