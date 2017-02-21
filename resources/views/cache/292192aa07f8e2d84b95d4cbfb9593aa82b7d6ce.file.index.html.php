<?php /* Smarty version Smarty-3.1.15, created on 2016-11-10 08:53:06
         compiled from "E:\wamp\www\tangram\resources\views\index.html" */ ?>
<?php /*%%SmartyHeaderCode:26292582435721a1487-97055170%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '292192aa07f8e2d84b95d4cbfb9593aa82b7d6ce' => 
    array (
      0 => 'E:\\wamp\\www\\tangram\\resources\\views\\index.html',
      1 => 1478766807,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '26292582435721a1487-97055170',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'keywords' => 0,
    'description' => 0,
    'site_url' => 0,
    'title' => 0,
    'headscript' => 0,
    'pro' => 0,
    'article' => 0,
    'about' => 0,
    'news' => 0,
    'new' => 0,
    'left_nav' => 0,
    'lnav' => 0,
    'contact_us' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.15',
  'unifunc' => 'content_58243572395506_34602168',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_58243572395506_34602168')) {function content_58243572395506_34602168($_smarty_tpl) {?>﻿<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<meta http-equiv="x-ua-compatible" content="ie=7" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="<?php echo $_smarty_tpl->tpl_vars['keywords']->value;?>
" />
<meta name="description" content="<?php echo $_smarty_tpl->tpl_vars['description']->value;?>
" />
<link href="<?php echo $_smarty_tpl->tpl_vars['site_url']->value;?>
css/css.css" rel="stylesheet" type="text/css" />
<script src="<?php echo $_smarty_tpl->tpl_vars['site_url']->value;?>
js/MSClass.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo $_smarty_tpl->tpl_vars['site_url']->value;?>
js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="http://common.mn.sina.com.cn/public/resource/lib/jquery.jcarousellite.js"></script>
<script type="text/javascript" src="<?php echo $_smarty_tpl->tpl_vars['site_url']->value;?>
js/jquery.SuperSlide.2.1.js"></script>
<script type="text/javascript" src="<?php echo $_smarty_tpl->tpl_vars['site_url']->value;?>
js/jquery.kinMaxShow-1.0.min.js"></script>
<script type="text/javascript" src="<?php echo $_smarty_tpl->tpl_vars['site_url']->value;?>
js/function.js"></script>
<script type="text/javascript" src="<?php echo $_smarty_tpl->tpl_vars['site_url']->value;?>
js/Marquee.js"></script>
    <style>
    .tx1 {
        behavior: url(pie.htc);
    }
    </style>
    <title><?php echo $_smarty_tpl->tpl_vars['title']->value;?>
</title>
    <?php echo $_smarty_tpl->tpl_vars['headscript']->value;?>

</head>

<body>
    <?php echo $_smarty_tpl->getSubTemplate ('./_header.html', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>

    <div id="container" class="wrapper clearfix">
        <div id="left">
            <div id="pro">
                <div id="prizes">
                    <div class="photos">
                        <div class="photos-content">
                            <ul>
                                <?php  $_smarty_tpl->tpl_vars['article'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['article']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['pro']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['article']->key => $_smarty_tpl->tpl_vars['article']->value) {
$_smarty_tpl->tpl_vars['article']->_loop = true;
?>
                                <li>
                                    <a href="<?php echo $_smarty_tpl->tpl_vars['article']->value['link'];?>
"><div class="img"><img alt="" src="<?php echo $_smarty_tpl->tpl_vars['article']->value['img'];?>
"  /></div></a>
                                </li>
                                <?php } ?>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="about">
                <div class="title clearfix">
                    <div class="ch"><?php echo $_smarty_tpl->tpl_vars['about']->value['name'];?>
</div>
                    <div class="en"><?php echo $_smarty_tpl->tpl_vars['about']->value['en_name'];?>
</div><span><a href="<?php echo $_smarty_tpl->tpl_vars['about']->value['link'];?>
"><img src="<?php echo $_smarty_tpl->tpl_vars['site_url']->value;?>
images/more.jpg" /></a></span></div>
                <div class="inner">
                    <img src="<?php echo $_smarty_tpl->tpl_vars['about']->value['img'];?>
" height="56" width="321" /><?php echo $_smarty_tpl->tpl_vars['about']->value['meta_description'];?>

                </div>
            </div>
            <div id="news">
                <div class="title clearfix">
                    <div class="ch"><?php echo $_smarty_tpl->tpl_vars['news']->value['name'];?>
</div>
                    <div class="en"><?php echo $_smarty_tpl->tpl_vars['news']->value['en_name'];?>
</div><span><a href="<?php echo $_smarty_tpl->tpl_vars['news']->value['link'];?>
"><img src="<?php echo $_smarty_tpl->tpl_vars['site_url']->value;?>
images/more.jpg" /></a></span></div>
                <div class="inner">
                    <img src="<?php echo $_smarty_tpl->tpl_vars['news']->value['img'];?>
" height="56" width="321" />
                    <ul>
                        <?php  $_smarty_tpl->tpl_vars['new'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['new']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['news']->value['childmenu']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
 $_smarty_tpl->tpl_vars['new']->index=-1;
foreach ($_from as $_smarty_tpl->tpl_vars['new']->key => $_smarty_tpl->tpl_vars['new']->value) {
$_smarty_tpl->tpl_vars['new']->_loop = true;
 $_smarty_tpl->tpl_vars['new']->index++;
?>
                        <li><span class="date"><time class="fr" datetime="<?php echo $_smarty_tpl->tpl_vars['new']->value['updated_at'];?>
" pubdate="pubdate"><?php echo $_smarty_tpl->tpl_vars['new']->value['updated_at'];?>
</time></span><a href="<?php echo $_smarty_tpl->tpl_vars['new']->value['link'];?>
"><?php echo $_smarty_tpl->tpl_vars['new']->value['name'];?>
</a></li>
                        <?php if ($_smarty_tpl->tpl_vars['new']->index+1==3) {?><?php break 1?><?php }?> <?php } ?>
                    </ul>
                </div>
            </div>
        </div>
        <div id="right">
            <div id="list">
                <div class="title clearfix"><div class="ch"><?php echo $_smarty_tpl->tpl_vars['left_nav']->value['name'];?>
</div><div class="en"><?php echo $_smarty_tpl->tpl_vars['left_nav']->value['en_name'];?>
</div></div>
                 <div class="inner">
                  <ul>
  
                    <?php  $_smarty_tpl->tpl_vars['lnav'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['lnav']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['left_nav']->value['childmenu']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
 $_smarty_tpl->tpl_vars['lnav']->index=-1;
foreach ($_from as $_smarty_tpl->tpl_vars['lnav']->key => $_smarty_tpl->tpl_vars['lnav']->value) {
$_smarty_tpl->tpl_vars['lnav']->_loop = true;
 $_smarty_tpl->tpl_vars['lnav']->index++;
?>
                    <?php if ($_smarty_tpl->tpl_vars['lnav']->index+1>=1&&$_smarty_tpl->tpl_vars['lnav']->index+1<=4) {?>
                     <li><a href="<?php echo $_smarty_tpl->tpl_vars['lnav']->value['link'];?>
"><?php echo $_smarty_tpl->tpl_vars['lnav']->value['name'];?>
</a></li>
                     <?php }?>
                   <?php } ?>
                  </ul>
               </div>
            </div>
            <div id='contact'>
                <div class="title">
                    <div class="ch">联系方式</div>
                    <div class="en"> CONTACT US</div>
                </div>
                <?php echo $_smarty_tpl->tpl_vars['contact_us']->value;?>

            </div>
        </div>
    </div>
    <?php echo $_smarty_tpl->getSubTemplate ("./_footer.html", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>

</body>

</html>
<?php }} ?>
