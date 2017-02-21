/**
 *
 * previewJS
 * 
 * @name previewJS
 * @description preview template of fengfan without php.
 * @author Esone (http://IT.eexx.me)
 * @version 2.0 (2015.8.10 17:40 updated)
 * @copyright (c) 2015 Baidu
 *
 */

// 以下为模拟PHP输出数据，变量说明参见：http://pme.eexx.me/doku.php?id=ued:temple
var PREVIEW_DEMODATA = {
	list: [{
		title: '这是一篇测试文章',
		image: 'http://chanpin.xm12t.com.cn/images/art_02.jpg',
		link: 'content-news.html',
		description: '今天天气不错，挺风和日丽的...',
		pubdate: '2014-12-25',
		pubtimestamp: 1419487200,
		category: {
			name: '导航A',
			en_name: 'Nav A',
			link: 'list-imagetext.html'
		}
	}]
};
for (var i=1; i<12; i++) { PREVIEW_DEMODATA.list.push(objClone(PREVIEW_DEMODATA.list[0])); }
var PREVIEW_CONFIG = {
	site_url: './',
	site_another_url: '#此刻已跳转到与viewport相符的显示界面',
	search_action: 'searchresult.html',
	title: '网站标题',
	keywords: '关键词A,关键词B,关键词C',
	description: '这是这个页面的描述，这是一大段的描述语句，里面有很多的内容，多写点 多写点...',
	logo: 'http://www.baidu.com/img/baidu_jgylogo3.gif',
	favicon: 'images/favicon.ico',
	stylecolor: 'blue',
	footprint: 'copyright 2014-2015',
	footscript: '<!-- 这里将会输出底部脚本代码 -->\n<script type="text/javascript" src="http://chanpin.xm12t.com.cn/js/quickbar.js?debug"></script>',
	headscript: '<!-- 这里将会输出头部脚本代码 -->',
	navs: [{
		name: '新闻列表',
		en_name: 'News',
		link: 'list-text.html?id=1',
		image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
		description: '这是栏目的一段描述...',
		current: 0,
		lastest: objClone(PREVIEW_DEMODATA.list),
		type: 1,
		childmenu: null
	}, {
		name: '产品列表',
		en_name: 'Products',
		link: 'list-imagetext.html?id=3',
		image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
		description: '这是栏目的一段描述...',
		current: 0,
		lastest: objClone(PREVIEW_DEMODATA.list),
		type: 3,
		childmenu: [{
			name: '导航B1',
			en_name: 'Nav B1',
			link: 'list-imagetext.html',
			image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
			description: '这是栏目的一段描述...',
			current: 0,
			type: 3,
			childmenu: null
		}, {
			name: '导航B2',
			en_name: 'Nav B2',
			link: 'list-imagetext.html',
			image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
			description: '这是栏目的一段描述...',
			current: 0,
			type: 3,
			childmenu: null
		}, {
			name: '导航B3',
			en_name: 'Nav B3',
			link: 'list-imagetext.html',
			image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
			description: '这是栏目的一段描述...',
			current: 0,
			type: 3,
			childmenu: null
		}, {
			name: '导航B4',
			en_name: 'Nav B4',
			link: 'list-imagetext.html',
			image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
			description: '这是栏目的一段描述...',
			current: 0,
			type: 3,
			childmenu: null
		}, {
			name: '导航B5',
			en_name: 'Nav B5',
			link: 'list-imagetext.html',
			image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
			description: '这是栏目的一段描述...',
			current: 0,
			type: 3,
			childmenu: null
		}]
	}, {
		name: '最新产品',
		en_name: 'Lastest Products',
		link: 'list-image.html?id=4',
		image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
		description: '这是栏目的一段描述...',
		current: 0,
		lastest: objClone(PREVIEW_DEMODATA.list),
		type: 2,
		childmenu: null
	}, {
		name: '关于我们',
		en_name: 'About Us',
		link: 'list-page.html?id=7',
		image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
		description: '这是栏目的一段描述...',
		current: 0,
		lastest: null,
		type: 4,
		childmenu: null
	}, {
		name: '联系我们',
		en_name: 'Contact Us',
		link: 'list-page.html?id=8',
		image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
		description: '公司名称：XXX企业<br />公司电话：0592-2323232<br />公司地址：xxxxxxxxxx',
		current: 0,
		lastest: null,
		type: 4,
		childmenu: null
	}, {
		name: '留言板',
		en_name: 'Guest Book',
		link: 'list-page.html?id=10',
		image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
		description: '这是栏目的一段描述...',
		current: 0,
		lastest: null,
		type: 5,
		childmenu: null
	}, {
		name: '企业动态',
		en_name: 'Company News',
		link: 'list-text.html?id=2',
		image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
		description: '这是栏目的一段描述...',
		current: 0,
		lastest: null,
		type: 1,
		childmenu: [{
			name: '导航F1',
			en_name: 'Nav F1',
			link: 'list-text.html',
			image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
			description: '这是栏目的一段描述...',
			current: 0,
			type: 1,
			childmenu: null
		}, {
			name: '导航F2',
			en_name: 'Nav F2',
			link: 'list-text.html',
			image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
			description: '这是栏目的一段描述...',
			current: 0,
			type: 1,
			childmenu: null
		}, {
			name: '导航F3',
			en_name: 'Nav F3',
			link: 'list-text.html',
			image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
			description: '这是栏目的一段描述...',
			current: 0,
			type: 1,
			childmenu: [{
				name: '导航F3a',
				en_name: 'Nav F3a',
				link: 'list-imagetext.html',
				image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
				description: '这是栏目的一段描述...',
				current: 0,
				type: 3
			}, {
				name: '导航F3b',
				en_name: 'Nav F3b',
				link: 'list-imagetext.html',
				image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
				description: '这是栏目的一段描述...',
				current: 0,
				type: 3
			}]
		}]
	}],
	pagenavs: [{
		name: '导航F1',
		en_name: 'Nav F1',
		link: 'list-text.html',
		image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
		description: '这是栏目的一段描述...',
		current: 0
	}, {
		name: '导航F2',
		en_name: 'Nav F2',
		link: 'list-text.html',
		image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
		description: '这是栏目的一段描述...',
		current: 0
	}, {
		name: '导航F3',
		en_name: 'Nav F3',
		link: 'list-text.html',
		image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
		description: '这是栏目的一段描述...',
		current: 1,
		childmenu: [{
			name: '导航F3a',
			en_name: 'Nav F3a',
			link: 'list-imagetext.html',
			image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
			description: '这是栏目的一段描述...',
			current: 1
		}, {
			name: '导航F3b',
			en_name: 'Nav F3b',
			link: 'list-imagetext.html',
			image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
			description: '这是栏目的一段描述...',
			current: 0
		}]
	}],
	posnavs: [{
		name: '导航F',
		en_name: 'Nav F',
		link: 'list-text.html'
	}, {
		name: '导航F3',
		en_name: 'Nav F3',
		link: 'list-text.html'
	}, {
		name: '导航F3a',
		en_name: 'Nav F3a',
		link: 'list-imagetext.html'
	}],
	contact: {
		company: 'XXX有限公司',
		name: 'X先生',
		mobile: 13489990000,
		telephone: '0592-23232232',
		fax: '0592-8686886',
		mail: '01@eexx.me',
		qq: 156568451,
		address: '厦门市思明区软件园...'
	},
	article: {
		title: '文章标题',
		image: 'http://chanpin.xm12t.com.cn/images/art_01.jpg',
		images: [{
			title: '产品图1',
			image: 'http://chanpin.xm12t.com.cn/images/art_02.jpg'
		}, {
			title: '产品图2',
			image: 'http://chanpin.xm12t.com.cn/images/art_01.jpg'
		}],
		description: '今天天气不错，挺风和日丽的...',
		content: '&lt;p&gt;文章内容...&lt;/p&gt;&lt;p&gt;一大段文章内容...&lt;/p&gt;',
		pubdate: '2014-12-25',
		pubtimestamp: 1419487200,
		category: {
			name: '导航A',
			en_name: 'Nav A',
			link: 'list-imagetext.html'
		},
		prev: {
			title: '上一篇文章标题',
			link: 'content-news.html'
		},
		next: {
			title: '下一篇文章标题',
			link: 'content-product.html'
		}
	},
	related: objClone(PREVIEW_DEMODATA.list),
	list: {
		name: '栏目A',
		en_name: 'Nav A',
		image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
		link: 'list-text.html',
		description: '这是栏目A的一段描述...',
		content: '&lt;p&gt;这里是页面内容，可以使用html&lt;/p&gt;',
		data: objClone(PREVIEW_DEMODATA.list),
		total: 999,
		type: 1
	},
	search: {
		keyword: location.href.match(/\?s=([^&^#]*)/) && location.href.match(/\?s=([^&^#]*)/)[1] ? location.href.match(/\?s=([^&^#]*)/)[1] : '最新',
		data: objClone(PREVIEW_DEMODATA.list),
		total: 66
	},
	page_links: {
		page_count: 99,
		per_page: 12,
		current_page: 1,
		first_link: '',
		prev_link: '',
		next_link: 'list-image.html?p=2',
		last_link: 'list-image.html?p=99',
		nears_link: {
			1: '',
			2: 'list-imagetext.html?p=2',
			3: 'list-imagetext.html?p=3',
			4: 'list-imagetext.html?p=4',
			5: 'list-imagetext.html?p=5'
		}
	},
	mIndexCats: [{
		name: '新闻列表',
		en_name: 'News',
		link: 'list-text.html?id=1',
		image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
		description: '这是栏目的一段描述...',
		data: objClone(PREVIEW_DEMODATA.list),
		type: 1,
		showtype: 1
	}, {
		name: '企业动态',
		en_name: 'Company News',
		link: 'list-text.html?id=2',
		image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
		description: '这是栏目的一段描述...',
		data: objClone(PREVIEW_DEMODATA.list),
		type: 1,
		showtype: 2
	}, {
		name: '产品列表',
		en_name: 'Products',
		link: 'list-image.html?id=3',
		image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
		description: '这是栏目的一段描述...',
		data: objClone(PREVIEW_DEMODATA.list),
		type: 2,
		showtype: 1
	}, {
		name: '最新产品',
		en_name: 'Lastest Products',
		link: 'list-image.html?id=4',
		image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
		description: '这是栏目的一段描述...',
		data: objClone(PREVIEW_DEMODATA.list),
		type: 2,
		showtype: 2
	}, {
		name: '当期热卖',
		en_name: 'Hot Products',
		link: 'list-image.html?id=5',
		image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
		description: '这是栏目的一段描述...',
		data: objClone(PREVIEW_DEMODATA.list),
		type: 2,
		showtype: 3
	}, {
		name: '企业风采',
		en_name: 'Company Photos',
		link: 'list-imagetext.html?id=6',
		image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
		description: '这是栏目的一段描述...',
		data: objClone(PREVIEW_DEMODATA.list),
		type: 3,
		showtype: 1
	}, {
		name: '关于我们',
		en_name: 'About Us',
		link: 'list-page.html?id=7',
		image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
		description: '这是栏目的一段描述...',
		content: '&lt;p&gt;这里是页面内容，可以使用html&lt;/p&gt;',
		type: 4,
		showtype: 1
	}, {
		name: '双十二活动',
		en_name: 'Double 12 Act',
		link: 'http://wx.dn160.com.cn/index.php?g=Wap&m=Guajiang&a=index&token=fwpmnq1407894165&type=2&wecha_id=ok6CKuN_fX__XeXCn&id=156',
		image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
		description: '这是栏目的一段描述...',
		content: '&lt;p&gt;这里是页面内容，可以使用html&lt;/p&gt;',
		type: 7
	}, {
		name: '留言板',
		en_name: 'Guest Book',
		link: 'list-page.html?id=10',
		image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
		description: '这是栏目的一段描述...',
		type: 5
	}, {
		name: '友情链接',
		en_name: 'Friends Links',
		link: 'http://www.baidu.com',
		image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
		description: '这是栏目的一段描述...',
		type: 6
	}]
};
// 行业模板示例数据
var changeConfigSource = function(cat) {
	switch (true) {
		case cat.indexOf('旅游')!=-1:
			PREVIEW_DEMODATA.list[0].title = '[台湾自由行4天3夜]';
			PREVIEW_DEMODATA.list[0].image = 'http://chanpin.xm12t.com.cn/images/tourlist/img1.jpg';
			PREVIEW_DEMODATA.list[0].description = '意大利（庞贝古城 卡普里岛 奥尔维耶托 亚西西）欧洲深度探索漫游之旅10天';
			PREVIEW_DEMODATA.list[1].title = '[曼谷-芭提雅-泰国双飞5日游]';
			PREVIEW_DEMODATA.list[1].image = 'http://chanpin.xm12t.com.cn/images/tourlist/img2.jpg';
			PREVIEW_DEMODATA.list[1].description = '暹罗剧场表演（列入金氏世界記錄的舞台）暹罗梦幻剧场是泰国规模最大的宏伟华丽剧院，剧场设';
			PREVIEW_DEMODATA.list[2].title = '[雅加达-巴厘岛6日游]';
			PREVIEW_DEMODATA.list[2].image = 'http://chanpin.xm12t.com.cn/images/tourlist/img3.jpg';
			PREVIEW_DEMODATA.list[2].description = '第一天下午3点福州长乐国际机场集中，度假去喽！怀着一颗期待已';
			PREVIEW_DEMODATA.list[3].title = '[台湾自由行4天3夜]';
			PREVIEW_DEMODATA.list[3].image = 'http://chanpin.xm12t.com.cn/images/tourlist/img4.jpg';
			PREVIEW_DEMODATA.list[3].description = PREVIEW_DEMODATA.list[0].description;
			PREVIEW_DEMODATA.list[4].title = '[台湾自由行4天3夜]';
			PREVIEW_DEMODATA.list[4].image = 'http://chanpin.xm12t.com.cn/images/tourlist/img5.jpg';
			PREVIEW_DEMODATA.list[4].description = PREVIEW_DEMODATA.list[0].description;
			PREVIEW_DEMODATA.list[5].title = '[台湾自由行4天3夜]';
			PREVIEW_DEMODATA.list[5].image = 'http://chanpin.xm12t.com.cn/images/tourlist/img6.jpg';
			PREVIEW_DEMODATA.list[5].description = PREVIEW_DEMODATA.list[0].description;
			PREVIEW_DEMODATA.list[6].title = '[台湾自由行4天3夜]';
			PREVIEW_DEMODATA.list[6].image = 'http://chanpin.xm12t.com.cn/images/tourlist/img7.jpg';
			PREVIEW_DEMODATA.list[6].description = PREVIEW_DEMODATA.list[0].description;
			PREVIEW_DEMODATA.list[7].title = '[台湾自由行4天3夜]';
			PREVIEW_DEMODATA.list[7].image = 'http://chanpin.xm12t.com.cn/images/tourlist/img8.jpg';
			PREVIEW_DEMODATA.list[7].description = PREVIEW_DEMODATA.list[0].description;
			PREVIEW_DEMODATA.list[8].title = '[台湾自由行4天3夜]';
			PREVIEW_DEMODATA.list[8].image = 'http://chanpin.xm12t.com.cn/images/tourlist/img9.jpg';
			PREVIEW_DEMODATA.list[8].description = PREVIEW_DEMODATA.list[0].description;
			PREVIEW_DEMODATA.list[9].title = '[台湾自由行4天3夜]';
			PREVIEW_DEMODATA.list[9].image = 'http://chanpin.xm12t.com.cn/images/tourlist/img10.jpg';
			PREVIEW_DEMODATA.list[9].description = PREVIEW_DEMODATA.list[0].description;
			
			PREVIEW_CONFIG.title = 'XX旅游集团';
			PREVIEW_CONFIG.logo = 'http://chanpin.xm12t.com.cn/images/logo.png';
			var content = '';
			content = '<p>外景照片更加自然更加美丽，是婚纱照不可或缺的，涉及外景车，燃油，工餐，饮水等费用都是由蒙娜丽莎来担负的。一些高端套系比如万元以上是没有任何场地费用的，但是一些低端套系，如果您想去特殊景点如非常勿扰2、蜈支洲岛等，要有相应的场地费。</p>';
			content += '<p>完全不用携带多余的东西，下列物品需携带：防晒霜、太阳伞、防蚊液、隐形文胸，如果有条件自己带几件便装，可以让挑选的余地更大，太多的东西反而累赘。</p>';
			content += '<p>您选择的游艇套系所需要的一些小道具我们蒙娜丽莎工作室都有相应的安排，请不必担心。再有特殊细节注意事项，客服会在拍摄日期之前一一通知到位。</p>';
			content += '<p>您选择的游艇套系所需要的一些小道具我们蒙娜丽莎工作室都有相应的安排，请不必担心。再有特殊细节注意事项，客服会在拍摄日期之前一一通知到位。</p>';
			content += '<p>在拍婚纱照前几天一定要休息好，保证皮肤状况良好，因为蒙娜丽莎倡导淡妆的真实美，如果恰好皮肤问题集中爆发，只能让化妆师的妙手来帮你啦，呵呵。蒙娜丽莎的化妆师造型师会把你打扮的美美的。</p>';
			content += '<p>选片方面蒙娜丽莎也有人性化的服务，首先确定是否加选照片，明确挑片所需时间，我们会有专人陪同选片的，以严苛的角度来挑选，注意表情、光线、美感搭配度、动作、小细节等标准。您也可将自己喜欢的排版方式和精修片风格传达给后期数码师，数码师会酌情处理。另外，蒙娜丽莎的底片是全送的，您拿到照片后也可在当地另行加工。<br />在修片环节，蒙娜丽莎倡导调整光线美感和明显瑕疵的修复，会尽量完整的保留原始图片美感。如果修的太厉害，难免会失真的。尺度的把握数码师会从专业角度处理。其实就算一点没有精修的原图片就已经很惊艳了，蒙娜丽莎摄影师在外景拍摄上不会让您失望的。</p>';
			PREVIEW_CONFIG.list.image = 'http://chanpin.xm12t.com.cn/images/tourlist/img1.jpg';
			PREVIEW_CONFIG.list.data = objClone(PREVIEW_DEMODATA.list);
			PREVIEW_CONFIG.list.content = content;
			PREVIEW_CONFIG.related = objClone(PREVIEW_DEMODATA.list);
			PREVIEW_CONFIG.article.content = content;
			PREVIEW_CONFIG.navs = [{
				name: '关于我们',
				en_name: 'About Us',
				link: 'list-page.html?id=1',
				image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
				description: '这是栏目的一段描述...',
				current: 0,
				lastest: null,
				type: 4,
				childmenu: null
			}, {
				name: '旅游资讯',
				en_name: 'Trip News',
				link: 'list-imagetext.html?id=2',
				image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
				current: 0,
				lastest: objClone(PREVIEW_DEMODATA.list),
				type: 3,
				childmenu: [{
					name: '精选景点',
					en_name: 'Seleted Attractions',
					link: 'list-image.html?id=8',
					image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
					description: '这是栏目的一段描述...',
					current: 0,
					lastest: objClone(PREVIEW_DEMODATA.list),
					type: 2,
					childmenu: null
				}, {
					name: '当季热门景点',
					en_name: 'Hot Attractions',
					link: 'list-imagetext.html?id=9',
					image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
					description: '这是栏目的一段描述...',
					current: 0,
					lastest: objClone(PREVIEW_DEMODATA.list),
					type: 3,
					childmenu: null
				}]
			}, {
				name: '联系我们',
				en_name: 'Contacts',
				link: 'list-page.html?id=3',
				image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
				description: '这是栏目的一段描述...',
				current: 0,
				lastest: null,
				type: 4,
				childmenu: null
			}, {
				name: '周边游',
				en_name: 'Trip Around',
				link: 'list-text.html?id=4',
				image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
				description: '这是栏目的一段描述...',
				current: 0,
				lastest: objClone(PREVIEW_DEMODATA.list),
				type: 1,
				childmenu: null
			}, {
				name: '国内游',
				en_name: 'Trip Internal',
				link: 'list-text.html?id=5',
				image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
				description: '这是栏目的一段描述...',
				current: 0,
				lastest: objClone(PREVIEW_DEMODATA.list),
				type: 1,
				childmenu: null
			}, {
				name: '境外游',
				en_name: 'Trip International',
				link: 'list-text.html?id=6',
				image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
				description: '这是栏目的一段描述...',
				current: 0,
				lastest: objClone(PREVIEW_DEMODATA.list),
				type: 1,
				childmenu: null
			}, {
				name: '自驾游',
				en_name: 'Trip Drive',
				link: 'list-text.html?id=7',
				image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
				description: '这是栏目的一段描述...',
				current: 0,
				lastest: objClone(PREVIEW_DEMODATA.list),
				type: 1,
				childmenu: null
			}];
			PREVIEW_CONFIG.mIndexCats = [{
				name: '关于我们',
				en_name: 'About Us',
				link: 'list-page.html?id=1',
				image: 'http://chanpin.xm12t.com.cn/images/tourlist/navicon2.png',
				description: '这是栏目的一段描述...',
				content: '&lt;p&gt;这里是页面内容，可以使用html&lt;/p&gt;',
				type: 4,
				showtype: 1
			}, {
				name: '旅游资讯',
				en_name: 'Trip News',
				link: 'list-page.html?id=2',
				image: 'http://chanpin.xm12t.com.cn/images/tourlist/navicon3.png',
				description: '这是栏目的一段描述...',
				content: '&lt;p&gt;这里是页面内容，可以使用html&lt;/p&gt;',
				type: 4,
				showtype: 1
			}, {
				name: '精选景点',
				en_name: 'Seleted Attractions',
				link: 'list-image.html?id=8',
				image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
				description: '这是栏目的一段描述...',
				data: (function() {
					var data = objClone(PREVIEW_DEMODATA.list);
					data[0].title = '精品日本游';
					data[1].title = '文艺欧洲行';
					data[2].title = '风情东南亚';
					data[3].title = '激情美洲游';
					return data;
				})(),
				type: 2,
				showtype: 1
			}, {
				name: '当季热门景点',
				en_name: 'Hot Attractions',
				link: 'list-imagetext.html?id=9',
				image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
				description: '这是栏目的一段描述...',
				data: (function() {
					var data = objClone(PREVIEW_DEMODATA.list);
					data[0].image = 'http://chanpin.xm12t.com.cn/images/tourlist/img5.jpg';
					data[1].image = 'http://chanpin.xm12t.com.cn/images/tourlist/img6.jpg';
					data[2].image = 'http://chanpin.xm12t.com.cn/images/tourlist/img7.jpg';
					data[3].image = 'http://chanpin.xm12t.com.cn/images/tourlist/img8.jpg';
					return data;
				})(),
				type: 3,
				showtype: 1
			}, {
				name: '联系我们',
				en_name: 'Contacts',
				link: 'list-page.html?id=3',
				image: 'http://chanpin.xm12t.com.cn/images/tourlist/navicon4.png',
				description: '这是栏目的一段描述...',
				content: '&lt;p&gt;这里是页面内容，可以使用html&lt;/p&gt;',
				type: 4,
				showtype: 1
			}, {
				name: '周边游',
				en_name: 'Trip Around',
				link: 'list-text.html?id=4',
				image: 'http://chanpin.xm12t.com.cn/images/tourlist/navicon5.png',
				description: '这是栏目的一段描述...',
				data: (function() {
					var data = objClone(PREVIEW_DEMODATA.list);
					data[0].title = '鼓浪屿';
					data[1].title = '金光湖';
					data[2].title = '野山谷';
					data[3].title = '大嶝';
					data[4].title = '漳州';
					data[5].title = '龙岩';
					data[6].title = '福建土楼';
					data[7].title = '武夷山';
					data[8].title = '福州';
					data[9].title = '连城';
					data[10].title = '永泰';
					data[11].title = '连江';
					return data;
				})(),
				type: 1,
				showtype: 1
			}, {
				name: '国内游',
				en_name: 'Trip Internal',
				link: 'list-text.html?id=5',
				image: 'http://chanpin.xm12t.com.cn/images/tourlist/navicon6.png',
				description: '这是栏目的一段描述...',
				data: (function() {
					var data = objClone(PREVIEW_DEMODATA.list);
					data[0].title = '三亚';
					data[1].title = '天涯海角';
					data[2].title = '蜈支洲岛';
					data[3].title = '南山文化苑';
					data[4].title = '昆明';
					data[5].title = '大理';
					data[6].title = '丽江';
					data[7].title = '香格里拉';
					data[8].title = '北京';
					data[9].title = '九寨沟';
					data[10].title = '峨眉山';
					data[11].title = '桂林';
					return data;
				})(),
				type: 1,
				showtype: 2
			}, {
				name: '境外游',
				en_name: 'Trip International',
				link: 'list-text.html?id=6',
				image: 'http://chanpin.xm12t.com.cn/images/tourlist/navicon7.png',
				description: '这是栏目的一段描述...',
				data: (function() {
					var data = objClone(PREVIEW_DEMODATA.list);
					data[0].title = '法国';
					data[1].title = '瑞士';
					data[2].title = '德国';
					data[3].title = '英国';
					data[4].title = '俄罗斯';
					data[5].title = '意大利';
					data[6].title = '奥地利';
					data[7].title = '希腊';
					data[8].title = '马尔代夫';
					data[9].title = '斯里兰卡';
					data[10].title = '澳大利亚';
					data[11].title = '新西兰';
					return data;
				})(),
				type: 1,
				showtype: 3
			}, {
				name: '留言板',
				en_name: 'Guest Book',
				link: 'list-page.html?id=10',
				image: 'http://chanpin.xm12t.com.cn/images/tourlist/navicon1.png',
				description: '这是栏目的一段描述...',
				content: '&lt;p&gt;这里是页面内容，可以使用html&lt;/p&gt;',
				type: 5,
				showtype: 1
			}];
			break;
	}
};

// 数据逻辑化
var makeDataLogical = function() {
	formatListsData('mIndexCats', 'data');
	formatListsData('navs', 'lastest');
	!function() {
		var location_link = location.href.replace(location.hash, "").substr(location.href.lastIndexOf("/")+1);
		// 详情页
		if (/\/content-[a-z]+\.htm/.test(location.href)) {
			delete PREVIEW_CONFIG.mIndexCats;
			setCurrent(PREVIEW_CONFIG.navs, 0);
		}else{
			delete PREVIEW_CONFIG.article;
			delete PREVIEW_CONFIG.related;
		}
		// 列表页
		if (/\/(list-[a-z]+|searchresult)\.htm/.test(location.href)) {
			delete PREVIEW_CONFIG.mIndexCats;
			var formatList = function(source) {
				PREVIEW_CONFIG.list.name = source.name;
				PREVIEW_CONFIG.list.en_name = source.en_name;
				PREVIEW_CONFIG.list.image = source.image;
				PREVIEW_CONFIG.list.link = source.link;
				PREVIEW_CONFIG.list.description = source.description;
				PREVIEW_CONFIG.list.type = source.type;
				if (source.type == 4) {
				}else{
					delete PREVIEW_CONFIG.list.content;
					if (source.type == 1 || source.type == 2 || source.type == 3) {
						formatListData(PREVIEW_CONFIG.list, 'data');
					}else{
						delete PREVIEW_CONFIG.list.data;
					}
				}
			};
			if (location_link.indexOf('?') != -1) {
				// 暂不支持二级栏目
				for (var i=0; i<PREVIEW_CONFIG.navs.length; i++) {
					if (PREVIEW_CONFIG.navs[i].link == location_link) {
						formatList(PREVIEW_CONFIG.navs[i]);
						setCurrent(PREVIEW_CONFIG.navs, i);
					}
					if (typeof PREVIEW_CONFIG.navs[i].childmenu === 'object' && PREVIEW_CONFIG.navs[i].childmenu !== null && PREVIEW_CONFIG.navs[i].childmenu.length > 0) {
						for (var j=0; j<PREVIEW_CONFIG.navs[i].childmenu.length; j++) {
							if (PREVIEW_CONFIG.navs[i].childmenu[j].link == location_link) formatList(PREVIEW_CONFIG.navs[i].childmenu[j]);
						}
					}
				}
			}
		}else{
			delete PREVIEW_CONFIG.list;
			delete PREVIEW_CONFIG.page_links;
			if (!/\/content-[a-z]+\.htm/.test(location.href))
				delete PREVIEW_CONFIG.pagenavs;
		}
		
		function setCurrent(navs, key) {
			var cur = false;
			for (var i=0; i<navs.length; i++) {
				if ((typeof key == 'number' && i == key) || (typeof key !== 'number' && key)) {
					navs[i].current = 1;
					cur = true;
				}else{
					navs[i].current = 0;
					cur = false;
				}
				if (typeof navs[i].childmenu === 'object' && navs[i].childmenu !== null && navs[i].childmenu.length > 0)
					setCurrent(navs[i].childmenu, cur);
			}
		}
	}();
};

function formatListsData(key, listkey) {
	if (typeof PREVIEW_CONFIG[key] !== 'object' || PREVIEW_CONFIG[key] <= 0) return false;
	for (var i=0; i<PREVIEW_CONFIG[key].length; i++) {
		if (typeof PREVIEW_CONFIG[key][i].type === 'undefined') continue;
		formatListData(PREVIEW_CONFIG[key][i], listkey);
	}
}
function formatListData(value, listkey) {
	switch (value.type) {
		case 2:
		case 3:
			for (var j=0; j<value[listkey].length; j++) {
				value[listkey][j].link = 'content-product.html';
				value[listkey][j].category.name = value.name;
				value[listkey][j].category.en_name = value.en_name;
				value[listkey][j].category.image = value.image;
				value[listkey][j].category.link = value.link;
			}
			break;
		default:
			if (typeof value[listkey] === 'object' && value[listkey] !== null && value[listkey].length > 0) {
				for (var j=0; j<value[listkey].length; j++) {
					value[listkey][j].category.name = value.name;
					value[listkey][j].category.en_name = value.en_name;
					value[listkey][j].category.image = value.image;
					value[listkey][j].category.link = value.link;
				}
			}
	}
}


/* jSmarty */
(function(){function obMerge(ob1,ob2)
{for(var i=1;i<arguments.length;++i)
{for(var nm in arguments[i])
{ob1[nm]=arguments[i][nm];}}
return ob1;}
function countProperties(ob)
{var count=0;for(var nm in ob)
{if(ob.hasOwnProperty(nm))
{count++;}}
return count;}
function findInArray(a,v)
{if(Array.prototype.indexOf){return a.indexOf(v);}
for(var i=0;i<a.length;++i)
{if(a[i]===v)
{return i;}}
return-1;}
function evalString(s)
{return s.replace(/\\t/,'\t').replace(/\\n/,'\n').replace(/\\(['"\\])/g,'$1');}
function trimQuotes(s)
{return evalString(s.replace(/^['"](.*)['"]$/,'$1')).replace(/^\s+|\s+$/g,'');}
function findTag(re,s)
{var openCount=0;var offset=0;var ldelim=jSmart.prototype.left_delimiter;var rdelim=jSmart.prototype.right_delimiter;var skipInWS=jSmart.prototype.auto_literal;var reAny=/^\s*(.+)\s*$/i;var reTag=re?new RegExp('^\\s*('+re+')\\s*$','i'):reAny;for(var i=0;i<s.length;++i)
{if(s.substr(i,ldelim.length)==ldelim)
{if(skipInWS&&i+1<s.length&&s.substr(i+1,1).match(/\s/))
{continue;}
if(!openCount)
{s=s.slice(i);offset+=parseInt(i);i=0;}
++openCount;}
else if(s.substr(i,rdelim.length)==rdelim)
{if(skipInWS&&i-1>=0&&s.substr(i-1,1).match(/\s/))
{continue;}
if(!--openCount)
{var sTag=s.slice(ldelim.length,i).replace(/[\r\n]/g,' ');var found=sTag.match(reTag);if(found)
{found.index=offset;found[0]=s.slice(0,i+rdelim.length);return found;}}
if(openCount<0)
{openCount=0;}}}
return null;}
function findCloseTag(reClose,reOpen,s)
{var sInner='';var closeTag=null;var openTag=null;var findIndex=0;do
{if(closeTag)
{findIndex+=closeTag[0].length;}
closeTag=findTag(reClose,s);if(!closeTag)
{throw new Error('Unclosed {'+reOpen+'}');}
sInner+=s.slice(0,closeTag.index);findIndex+=closeTag.index;s=s.slice(closeTag.index+closeTag[0].length);openTag=findTag(reOpen,sInner);if(openTag)
{sInner=sInner.slice(openTag.index+openTag[0].length);}}
while(openTag);closeTag.index=findIndex;return closeTag;}
function findElseTag(reOpen,reClose,reElse,s)
{var offset=0;for(var elseTag=findTag(reElse,s);elseTag;elseTag=findTag(reElse,s))
{var openTag=findTag(reOpen,s);if(!openTag||openTag.index>elseTag.index)
{elseTag.index+=offset;return elseTag;}
else
{s=s.slice(openTag.index+openTag[0].length);offset+=openTag.index+openTag[0].length;var closeTag=findCloseTag(reClose,reOpen,s);s=s.slice(closeTag.index+closeTag[0].length);offset+=closeTag.index+closeTag[0].length;}}
return null;}
function execute(code,data)
{if(typeof(code)=='string')
{with({'__code':code})
{with(modifiers)
{with(data)
{try{return eval(__code);}
catch(e)
{throw new Error(e.message+' in \n'+code);}}}}}
return code;}
function assignVar(nm,val,data)
{if(nm.match(/\[\]$/))
{data[nm.replace(/\[\]$/,'')].push(val);}
else
{data[nm]=val;}}
var buildInFunctions={expression:{parse:function(s,tree)
{var e=parseExpression(s);tree.push({type:'build-in',name:'expression',expression:e.tree,params:parseParams(s.slice(e.value.length).replace(/^\s+|\s+$/g,''))});return e.tree;},process:function(node,data)
{var params=getActualParamValues(node.params,data);var res=process([node.expression],data);if(findInArray(params,'nofilter')<0)
{for(var i=0;i<default_modifiers.length;++i)
{var m=default_modifiers[i];m.params.__parsed[0]={type:'text',data:res};res=process([m],data);}
if(escape_html)
{res=modifiers.escape(res);}
res=applyFilters(varFilters,res);if(tpl_modifiers.length){__t=function(){return res;}
res=process(tpl_modifiers,data);}}
return res;}},operator:{process:function(node,data)
{var params=getActualParamValues(node.params,data);var arg1=params[0];if(node.optype=='binary')
{var arg2=params[1];if(node.op=='=')
{getVarValue(node.params.__parsed[0],data,arg2);return'';}
else if(node.op.match(/(\+=|-=|\*=|\/=|%=)/))
{arg1=getVarValue(node.params.__parsed[0],data);switch(node.op)
{case'+=':arg1+=arg2;break;case'-=':arg1-=arg2;break;case'*=':arg1*=arg2;break;case'/=':arg1/=arg2;break;case'%=':arg1%=arg2;break;}
return getVarValue(node.params.__parsed[0],data,arg1);}
else if(node.op.match(/div/))
{return(node.op!='div')^(arg1%arg2==0);}
else if(node.op.match(/even/))
{return(node.op!='even')^((arg1/arg2)%2==0);}
else if(node.op.match(/xor/))
{return(arg1||arg2)&&!(arg1&&arg2);}
switch(node.op)
{case'==':return arg1==arg2;case'!=':return arg1!=arg2;case'+':return parseInt(arg1,10)+parseInt(arg2,10);case'-':return parseInt(arg1,10)-parseInt(arg2,10);case'*':return parseInt(arg1,10)*parseInt(arg2,10);case'/':return parseInt(arg1,10)/parseInt(arg2,10);case'%':return parseInt(arg1,10)%parseInt(arg2,10);case'&&':return arg1&&arg2;case'||':return arg1||arg2;case'<':return arg1<arg2;case'<=':return arg1<=arg2;case'>':return arg1>arg2;case'>=':return arg1>=arg2;case'===':return arg1===arg2;case'!==':return arg1!==arg2;}}
else if(node.op=='!')
{return!arg1;}
else
{var isVar=node.params.__parsed[0].type=='var';if(isVar)
{arg1=getVarValue(node.params.__parsed[0],data);}
var v=arg1;if(node.optype=='pre-unary')
{switch(node.op)
{case'-':v=-arg1;break;case'++':v=++arg1;break;case'--':v=--arg1;break;}
if(isVar)
{getVarValue(node.params.__parsed[0],data,arg1);}}
else
{switch(node.op)
{case'++':arg1++;break;case'--':arg1--;break;}
getVarValue(node.params.__parsed[0],data,arg1);}
return v;}}},section:{type:'block',parse:function(params,tree,content)
{var subTree=[];var subTreeElse=[];tree.push({type:'build-in',name:'section',params:params,subTree:subTree,subTreeElse:subTreeElse});var findElse=findElseTag('section [^}]+','\/section','sectionelse',content);if(findElse)
{parse(content.slice(0,findElse.index),subTree);parse(content.slice(findElse.index+findElse[0].length).replace(/^[\r\n]/,''),subTreeElse);}
else
{parse(content,subTree);}},process:function(node,data)
{var params=getActualParamValues(node.params,data);var props={};data.smarty.section[params.__get('name',null,0)]=props;var show=params.__get('show',true);props.show=show;if(!show)
{return process(node.subTreeElse,data);}
var from=parseInt(params.__get('start',0));var to=(params.loop instanceof Object)?countProperties(params.loop):isNaN(params.loop)?0:parseInt(params.loop);var step=parseInt(params.__get('step',1));var max=parseInt(params.__get('max'));if(isNaN(max))
{max=Number.MAX_VALUE;}
if(from<0)
{from+=to;if(from<0)
{from=0;}}
else if(from>=to)
{from=to?to-1:0;}
var count=0;var loop=0;var i=from;for(;i>=0&&i<to&&count<max;i+=step,++count)
{loop=i;}
props.total=count;props.loop=count;count=0;var s='';for(i=from;i>=0&&i<to&&count<max;i+=step,++count)
{if(data.smarty['break'])
{break;}
props.first=(i==from);props.last=((i+step)<0||(i+step)>=to);props.index=i;props.index_prev=i-step;props.index_next=i+step;props.iteration=props.rownum=count+1;s+=process(node.subTree,data);data.smarty['continue']=false;}
data.smarty['break']=false;if(count)
{return s;}
return process(node.subTreeElse,data);}},setfilter:{type:'block',parseParams:function(paramStr)
{return[parseExpression('__t()|'+paramStr).tree];},parse:function(params,tree,content)
{tree.push({type:'build-in',name:'setfilter',params:params,subTree:parse(content,[])});},process:function(node,data)
{tpl_modifiers=node.params;var s=process(node.subTree,data);tpl_modifiers=[];return s;}},'for':{type:'block',parseParams:function(paramStr)
{var res=paramStr.match(/^\s*\$(\w+)\s*=\s*([^\s]+)\s*to\s*([^\s]+)\s*(?:step\s*([^\s]+))?\s*(.*)$/);if(!res)
{throw new Error('Invalid {for} parameters: '+paramStr);}
return parseParams("varName='"+res[1]+"' from="+res[2]+" to="+res[3]+" step="+(res[4]?res[4]:'1')+" "+res[5]);},parse:function(params,tree,content)
{var subTree=[];var subTreeElse=[];tree.push({type:'build-in',name:'for',params:params,subTree:subTree,subTreeElse:subTreeElse});var findElse=findElseTag('for\\s[^}]+','\/for','forelse',content);if(findElse)
{parse(content.slice(0,findElse.index),subTree);parse(content.slice(findElse.index+findElse[0].length),subTreeElse);}
else
{parse(content,subTree);}},process:function(node,data)
{var params=getActualParamValues(node.params,data);var from=parseInt(params.__get('from'));var to=parseInt(params.__get('to'));var step=parseInt(params.__get('step'));if(isNaN(step))
{step=1;}
var max=parseInt(params.__get('max'));if(isNaN(max))
{max=Number.MAX_VALUE;}
var count=0;var s='';var total=Math.min(Math.ceil(((step>0?to-from:from-to)+1)/Math.abs(step)),max);for(var i=parseInt(params.from);count<total;i+=step,++count)
{if(data.smarty['break'])
{break;}
data[params.varName]=i;s+=process(node.subTree,data);data.smarty['continue']=false;}
data.smarty['break']=false;if(!count)
{s=process(node.subTreeElse,data);}
return s;}},'if':{type:'block',parse:function(params,tree,content)
{var subTreeIf=[];var subTreeElse=[];tree.push({type:'build-in',name:'if',params:params,subTreeIf:subTreeIf,subTreeElse:subTreeElse});var findElse=findElseTag('if\\s+[^}]+','\/if','else[^}]*',content);if(findElse)
{parse(content.slice(0,findElse.index),subTreeIf);content=content.slice(findElse.index+findElse[0].length);var findElseIf=findElse[1].match(/^else\s*if(.*)/);if(findElseIf)
{buildInFunctions['if'].parse(parseParams(findElseIf[1]),subTreeElse,content.replace(/^\n/,''));}
else
{parse(content.replace(/^\n/,''),subTreeElse);}}
else
{parse(content,subTreeIf);}},process:function(node,data)
{if(getActualParamValues(node.params,data)[0])
{return process(node.subTreeIf,data);}
else
{return process(node.subTreeElse,data);}}},foreach:{type:'block',parseParams:function(paramStr)
{var params={};var res=paramStr.match(/^\s*([$].+)\s*as\s*[$](\w+)\s*(=>\s*[$](\w+))?\s*$/i);if(res)
{paramStr='from='+res[1]+' item='+(res[4]||res[2]);if(res[4])
{paramStr+=' key='+res[2];}}
return parseParams(paramStr);},parse:function(params,tree,content)
{var subTree=[];var subTreeElse=[];tree.push({type:'build-in',name:'foreach',params:params,subTree:subTree,subTreeElse:subTreeElse});var findElse=findElseTag('foreach\\s[^}]+','\/foreach','foreachelse',content);if(findElse)
{parse(content.slice(0,findElse.index),subTree);parse(content.slice(findElse.index+findElse[0].length).replace(/^[\r\n]/,''),subTreeElse);}
else
{parse(content,subTree);}},process:function(node,data)
{var params=getActualParamValues(node.params,data);var a=params.from;if(!(a instanceof Object))
{a=[a];}
var total=countProperties(a);data[params.item+'__total']=total;if('name'in params)
{data.smarty.foreach[params.name]={};data.smarty.foreach[params.name].total=total;}
var s='';var i=0;for(var key in a)
{if(!a.hasOwnProperty(key))
{continue;}
if(data.smarty['break'])
{break;}
data[params.item+'__key']=isNaN(key)?key:parseInt(key);if('key'in params)
{data[params.key]=data[params.item+'__key'];}
data[params.item]=a[key];data[params.item+'__index']=parseInt(i);data[params.item+'__iteration']=parseInt(i+1);data[params.item+'__first']=(i===0);data[params.item+'__last']=(i==total-1);if('name'in params)
{data.smarty.foreach[params.name].index=parseInt(i);data.smarty.foreach[params.name].iteration=parseInt(i+1);data.smarty.foreach[params.name].first=(i===0)?1:'';data.smarty.foreach[params.name].last=(i==total-1)?1:'';}
++i;s+=process(node.subTree,data);data.smarty['continue']=false;}
data.smarty['break']=false;data[params.item+'__show']=(i>0);if(params.name)
{data.smarty.foreach[params.name].show=(i>0)?1:'';}
if(i>0)
{return s;}
return process(node.subTreeElse,data);}},'function':{type:'block',parse:function(params,tree,content)
{var subTree=[];plugins[trimQuotes(params.name?params.name:params[0])]={type:'function',subTree:subTree,defautParams:params,process:function(params,data)
{var defaults=getActualParamValues(this.defautParams,data);delete defaults.name;return process(this.subTree,obMerge({},data,defaults,params));}};parse(content,subTree);}},php:{type:'block',parse:function(params,tree,content){}},'extends':{type:'function',parse:function(params,tree)
{tree.splice(0,tree.length);getTemplate(trimQuotes(params.file?params.file:params[0]),tree);}},block:{type:'block',parse:function(params,tree,content)
{tree.push({type:'build-in',name:'block',params:params});params.append=findInArray(params,'append')>=0;params.prepend=findInArray(params,'prepend')>=0;params.hide=findInArray(params,'hide')>=0;params.hasChild=params.hasParent=false;onParseVar=function(nm)
{if(nm.match(/^\s*[$]smarty.block.child\s*$/))
{params.hasChild=true;}
if(nm.match(/^\s*[$]smarty.block.parent\s*$/))
{params.hasParent=true;}}
var tree=parse(content,[]);onParseVar=function(nm){}
var blockName=trimQuotes(params.name?params.name:params[0]);if(!(blockName in blocks))
{blocks[blockName]=[];}
blocks[blockName].push({tree:tree,params:params});},process:function(node,data)
{data.smarty.block.parent=data.smarty.block.child='';var blockName=trimQuotes(node.params.name?node.params.name:node.params[0]);this.processBlocks(blocks[blockName],blocks[blockName].length-1,data);return data.smarty.block.child;},processBlocks:function(blockAncestry,i,data)
{if(!i&&blockAncestry[i].params.hide){data.smarty.block.child='';return;}
var append=true;var prepend=false;for(;i>=0;--i)
{if(blockAncestry[i].params.hasParent)
{var tmpChild=data.smarty.block.child;data.smarty.block.child='';this.processBlocks(blockAncestry,i-1,data);data.smarty.block.parent=data.smarty.block.child;data.smarty.block.child=tmpChild;}
var tmpChild=data.smarty.block.child;var s=process(blockAncestry[i].tree,data);data.smarty.block.child=tmpChild;if(blockAncestry[i].params.hasChild)
{data.smarty.block.child=s;}
else if(append)
{data.smarty.block.child=s+data.smarty.block.child;}
else if(prepend)
{data.smarty.block.child+=s;}
append=blockAncestry[i].params.append;prepend=blockAncestry[i].params.prepend;}}},strip:{type:'block',parse:function(params,tree,content)
{parse(content.replace(/[ \t]*[\r\n]+[ \t]*/g,''),tree);}},literal:{type:'block',parse:function(params,tree,content)
{parseText(content,tree);}},ldelim:{type:'function',parse:function(params,tree)
{parseText(jSmart.prototype.left_delimiter,tree);}},rdelim:{type:'function',parse:function(params,tree)
{parseText(jSmart.prototype.right_delimiter,tree);}},'while':{type:'block',parse:function(params,tree,content)
{tree.push({type:'build-in',name:'while',params:params,subTree:parse(content,[])});},process:function(node,data)
{var s='';while(getActualParamValues(node.params,data)[0])
{if(data.smarty['break'])
{break;}
s+=process(node.subTree,data);data.smarty['continue']=false;}
data.smarty['break']=false;return s;}}};var plugins={};var modifiers={};var files={};var blocks=null;var scripts=null;var tpl_modifiers=[];function parse(s,tree)
{for(var openTag=findTag('',s);openTag;openTag=findTag('',s))
{if(openTag.index)
{parseText(s.slice(0,openTag.index),tree);}
s=s.slice(openTag.index+openTag[0].length);var res=openTag[1].match(/^\s*(\w+)(.*)$/);if(res)
{var nm=res[1];var paramStr=(res.length>2)?res[2].replace(/^\s+|\s+$/g,''):'';if(nm in buildInFunctions)
{var buildIn=buildInFunctions[nm];var params=('parseParams'in buildIn?buildIn.parseParams:parseParams)(paramStr);if(buildIn.type=='block')
{s=s.replace(/^\n/,'');var closeTag=findCloseTag('\/'+nm,nm+' +[^}]*',s);buildIn.parse(params,tree,s.slice(0,closeTag.index));s=s.slice(closeTag.index+closeTag[0].length);}
else
{buildIn.parse(params,tree);if(nm=='extends')
{tree=[];}}
s=s.replace(/^\n/,'');}
else if(nm in plugins)
{var plugin=plugins[nm];if(plugin.type=='block')
{var closeTag=findCloseTag('\/'+nm,nm+' +[^}]*',s);parsePluginBlock(nm,parseParams(paramStr),tree,s.slice(0,closeTag.index));s=s.slice(closeTag.index+closeTag[0].length);}
else if(plugin.type=='function')
{parsePluginFunc(nm,parseParams(paramStr),tree);}
if(nm=='append'||nm=='assign'||nm=='capture'||nm=='eval'||nm=='include')
{s=s.replace(/^\n/,'');}}
else
{buildInFunctions.expression.parse(openTag[1],tree);}}
else
{var node=buildInFunctions.expression.parse(openTag[1],tree);if(node.type=='build-in'&&node.name=='operator'&&node.op=='=')
{s=s.replace(/^\n/,'');}}}
if(s)
{parseText(s,tree);}
return tree;}
function parseText(text,tree)
{if(parseText.parseEmbeddedVars)
{var re=/([$][\w@]+)|`([^`]*)`/;for(var found=re.exec(text);found;found=re.exec(text))
{tree.push({type:'text',data:text.slice(0,found.index)});tree.push(parseExpression(found[1]?found[1]:found[2]).tree);text=text.slice(found.index+found[0].length);}}
tree.push({type:'text',data:text});return tree;}
function parseFunc(name,params,tree)
{params.__parsed.name=parseText(name,[])[0];tree.push({type:'plugin',name:'__func',params:params});return tree;}
function parseOperator(op,type,precedence,tree)
{tree.push({type:'build-in',name:'operator',op:op,optype:type,precedence:precedence,params:{}});}
function parseVar(s,e,nm)
{var rootName=e.token;var parts=[{type:'text',data:nm.replace(/^(\w+)@(key|index|iteration|first|last|show|total)/gi,"$1__$2")}];var re=/^(?:\.|\s*->\s*|\[\s*)/;for(var op=s.match(re);op;op=s.match(re))
{e.token+=op[0];s=s.slice(op[0].length);var eProp={value:'',tree:[]};if(op[0].match(/\[/))
{eProp=parseExpression(s);if(eProp)
{e.token+=eProp.value;parts.push(eProp.tree);s=s.slice(eProp.value.length);}
var closeOp=s.match(/\s*\]/);if(closeOp)
{e.token+=closeOp[0];s=s.slice(closeOp[0].length);}}
else
{var parseMod=parseModifiers.stop;parseModifiers.stop=true;if(lookUp(s,eProp))
{e.token+=eProp.value;var part=eProp.tree[0];if(part.type=='plugin'&&part.name=='__func')
{part.hasOwner=true;}
parts.push(part);s=s.slice(eProp.value.length);}
else
{eProp=false;}
parseModifiers.stop=parseMod;}
if(!eProp)
{parts.push({type:'text',data:''});}}
e.tree.push({type:'var',parts:parts});e.value+=e.token.substr(rootName.length);onParseVar(e.token);return s;}
function onParseVar(nm){}
var tokens=[{re:/^\$([\w@]+)/,parse:function(e,s)
{parseModifiers(parseVar(s,e,RegExp.$1),e);}},{re:/^(true|false)/i,parse:function(e,s)
{parseText(e.token.match(/true/i)?'1':'',e.tree);}},{re:/^'([^'\\]*(?:\\.[^'\\]*)*)'/,parse:function(e,s)
{parseText(evalString(RegExp.$1),e.tree);parseModifiers(s,e);}},{re:/^"([^"\\]*(?:\\.[^"\\]*)*)"/,parse:function(e,s)
{var v=evalString(RegExp.$1);var isVar=v.match(tokens[0].re);if(isVar)
{var eVar={token:isVar[0],tree:[]};parseVar(v,eVar,isVar[1]);if(eVar.token.length==v.length)
{e.tree.push(eVar.tree[0]);return;}}
parseText.parseEmbeddedVars=true;e.tree.push({type:'plugin',name:'__quoted',params:{__parsed:parse(v,[])}});parseText.parseEmbeddedVars=false;parseModifiers(s,e);}},{re:/^(\w+)\s*[(]([)]?)/,parse:function(e,s)
{var fnm=RegExp.$1;var noArgs=RegExp.$2;var params=parseParams(noArgs?'':s,/^\s*,\s*/);parseFunc(fnm,params,e.tree);e.value+=params.toString();parseModifiers(s.slice(params.toString().length),e);}},{re:/^\s*\(\s*/,parse:function(e,s)
{var parens=[];e.tree.push(parens);parens.parent=e.tree;e.tree=parens;}},{re:/^\s*\)\s*/,parse:function(e,s)
{if(e.tree.parent)
{e.tree=e.tree.parent;}}},{re:/^\s*(\+\+|--)\s*/,parse:function(e,s)
{if(e.tree.length&&e.tree[e.tree.length-1].type=='var')
{parseOperator(RegExp.$1,'post-unary',1,e.tree);}
else
{parseOperator(RegExp.$1,'pre-unary',1,e.tree);}}},{re:/^\s*(===|!==|==|!=)\s*/,parse:function(e,s)
{parseOperator(RegExp.$1,'binary',6,e.tree);}},{re:/^\s+(eq|ne|neq)\s+/i,parse:function(e,s)
{var op=RegExp.$1.replace(/ne(q)?/,'!=').replace(/eq/,'==');parseOperator(op,'binary',6,e.tree);}},{re:/^\s*!\s*/,parse:function(e,s)
{parseOperator('!','pre-unary',2,e.tree);}},{re:/^\s+not\s+/i,parse:function(e,s)
{parseOperator('!','pre-unary',2,e.tree);}},{re:/^\s*(=|\+=|-=|\*=|\/=|%=)\s*/,parse:function(e,s)
{parseOperator(RegExp.$1,'binary',10,e.tree);}},{re:/^\s*(\*|\/|%)\s*/,parse:function(e,s)
{parseOperator(RegExp.$1,'binary',3,e.tree);}},{re:/^\s+mod\s+/i,parse:function(e,s)
{parseOperator('%','binary',3,e.tree);}},{re:/^\s*(\+|-)\s*/,parse:function(e,s)
{if(!e.tree.length||e.tree[e.tree.length-1].name=='operator')
{parseOperator(RegExp.$1,'pre-unary',4,e.tree);}
else
{parseOperator(RegExp.$1,'binary',4,e.tree);}}},{re:/^\s*(<=|&lt;=|>=|&gt;=|<>|&lt;&gt;|<|&lt;|>|&gt;)\s*/,parse:function(e,s)
{parseOperator(RegExp.$1.replace(/<>|&lt;&gt;/,'!=').replace(/&lt;/,'<').replace(/&gt;/,'>'),'binary',5,e.tree);}},{re:/^\s+(lt|lte|le|gt|gte|ge)\s+/i,parse:function(e,s)
{var op=RegExp.$1.replace(/l(t)?e/,'<=').replace(/lt/,'<').replace(/g(t)?e/,'>=').replace(/gt/,'>');parseOperator(op,'binary',5,e.tree);}},{re:/^\s+(is\s+(not\s+)?div\s+by)\s+/i,parse:function(e,s)
{parseOperator(RegExp.$2?'div_not':'div','binary',7,e.tree);}},{re:/^\s+is\s+(not\s+)?(even|odd)(\s+by\s+)?\s*/i,parse:function(e,s)
{var op=RegExp.$1?((RegExp.$2=='odd')?'even':'even_not'):((RegExp.$2=='odd')?'even_not':'even');parseOperator(op,'binary',7,e.tree);if(!RegExp.$3)
{parseText('1',e.tree);}}},{re:/^\s*(&&)\s*/,parse:function(e,s)
{parseOperator(RegExp.$1,'binary',8,e.tree);}},{re:/^\s*(\|\|)\s*/,parse:function(e,s)
{parseOperator(RegExp.$1,'binary',9,e.tree);}},{re:/^\s+and\s+/i,parse:function(e,s)
{parseOperator('&&','binary',11,e.tree);}},{re:/^\s+xor\s+/i,parse:function(e,s)
{parseOperator('xor','binary',12,e.tree);}},{re:/^\s+or\s+/i,parse:function(e,s)
{parseOperator('||','binary',13,e.tree);}},{re:/^#(\w+)#/,parse:function(e,s)
{var eVar={token:'$smarty',tree:[]};parseVar('.config.'+RegExp.$1,eVar,'smarty');e.tree.push(eVar.tree[0]);parseModifiers(s,e);}},{re:/^\s*\[\s*/,parse:function(e,s)
{var params=parseParams(s,/^\s*,\s*/,/^('[^'\\]*(?:\\.[^'\\]*)*'|"[^"\\]*(?:\\.[^"\\]*)*"|\w+)\s*=>\s*/);parsePluginFunc('__array',params,e.tree);e.value+=params.toString();var paren=s.slice(params.toString().length).match(/\s*\]/);if(paren)
{e.value+=paren[0];}}},{re:/^[\d.]+/,parse:function(e,s)
{if(e.token.indexOf('.')>-1){e.token=parseFloat(e.token);}else{e.token=parseInt(e.token,10);}
parseText(e.token,e.tree);parseModifiers(s,e);}},{re:/^\w+/,parse:function(e,s)
{parseText(e.token,e.tree);parseModifiers(s,e);}}];function parseModifiers(s,e)
{if(parseModifiers.stop)
{return;}
var modifier=s.match(/^\|(\w+)/);if(!modifier)
{return;}
e.value+=modifier[0];var fnm=modifier[1]=='default'?'defaultValue':modifier[1];s=s.slice(modifier[0].length).replace(/^\s+/,'');parseModifiers.stop=true;var params=[];for(var colon=s.match(/^\s*:\s*/);colon;colon=s.match(/^\s*:\s*/))
{e.value+=s.slice(0,colon[0].length);s=s.slice(colon[0].length);var param={value:'',tree:[]};if(lookUp(s,param))
{e.value+=param.value;params.push(param.tree[0]);s=s.slice(param.value.length);}
else
{parseText('',params);}}
parseModifiers.stop=false;params.unshift(e.tree.pop());e.tree.push(parseFunc(fnm,{__parsed:params},[])[0]);parseModifiers(s,e);}
function lookUp(s,e)
{if(!s)
{return false;}
if(s.substr(0,jSmart.prototype.left_delimiter.length)==jSmart.prototype.left_delimiter)
{var tag=findTag('',s);if(tag)
{e.token=tag[0];e.value+=tag[0];parse(tag[0],e.tree);parseModifiers(s.slice(e.value.length),e);return true;}}
for(var i=0;i<tokens.length;++i)
{if(s.match(tokens[i].re))
{e.token=RegExp.lastMatch;e.value+=RegExp.lastMatch;tokens[i].parse(e,s.slice(e.token.length));return true;}}
return false;}
function bundleOp(i,tree,precedence)
{var op=tree[i];if(op.name=='operator'&&op.precedence==precedence&&!op.params.__parsed)
{if(op.optype=='binary')
{op.params.__parsed=[tree[i-1],tree[i+1]];tree.splice(i-1,3,op);return true;}
else if(op.optype=='post-unary')
{op.params.__parsed=[tree[i-1]];tree.splice(i-1,2,op);return true;}
op.params.__parsed=[tree[i+1]];tree.splice(i,2,op);}
return false;}
function composeExpression(tree)
{var i=0;for(i=0;i<tree.length;++i)
{if(tree[i]instanceof Array)
{tree[i]=composeExpression(tree[i])}}
for(var precedence=1;precedence<14;++precedence)
{if(precedence==2||precedence==10)
{for(i=tree.length;i>0;--i)
{i-=bundleOp(i-1,tree,precedence);}}
else
{for(i=0;i<tree.length;++i)
{i-=bundleOp(i,tree,precedence);}}}
return tree[0];}
function parseExpression(s)
{var e={value:'',tree:[]};while(lookUp(s.slice(e.value.length),e)){}
if(!e.tree.length)
{return false;}
e.tree=composeExpression(e.tree);return e;}
function parseParams(paramsStr,reDelim,reName)
{var s=paramsStr.replace(/\n/g,' ').replace(/^\s+|\s+$/g,'');var params=[];params.__parsed=[];var paramsStr='';if(!s)
{return params;}
if(!reDelim)
{reDelim=/^\s+/;reName=/^(\w+)\s*=\s*/;}
while(s)
{var nm=null;if(reName)
{var foundName=s.match(reName);if(foundName)
{nm=trimQuotes(foundName[1]);paramsStr+=s.slice(0,foundName[0].length);s=s.slice(foundName[0].length);}}
var param=parseExpression(s);if(!param)
{break;}
if(nm)
{params[nm]=param.value;params.__parsed[nm]=param.tree;}
else
{params.push(param.value);params.__parsed.push(param.tree);}
paramsStr+=s.slice(0,param.value.length);s=s.slice(param.value.length);var foundDelim=s.match(reDelim);if(foundDelim)
{paramsStr+=s.slice(0,foundDelim[0].length);s=s.slice(foundDelim[0].length);}
else
{break;}}
params.toString=function(){return paramsStr;}
return params;}
function parsePluginBlock(name,params,tree,content)
{tree.push({type:'plugin',name:name,params:params,subTree:parse(content,[])});}
function parsePluginFunc(name,params,tree)
{tree.push({type:'plugin',name:name,params:params});}
function getActualParamValues(params,data)
{var actualParams=[];for(var nm in params.__parsed)
{if(params.__parsed.hasOwnProperty(nm))
{var v=process([params.__parsed[nm]],data);actualParams[nm]=v;}}
actualParams.__get=function(nm,defVal,id)
{if(nm in actualParams&&typeof(actualParams[nm])!='undefined')
{return actualParams[nm];}
if(typeof(id)!='undefined'&&typeof(actualParams[id])!='undefined')
{return actualParams[id];}
if(defVal===null)
{throw new Error("The required attribute '"+nm+"' is missing");}
return defVal;};return actualParams;}
function getVarValue(node,data,val)
{var v=data;var nm='';for(var i=0;i<node.parts.length;++i)
{var part=node.parts[i];if(part.type=='plugin'&&part.name=='__func'&&part.hasOwner)
{data.__owner=v;v=process([node.parts[i]],data);delete data.__owner;}
else
{nm=process([part],data);if(nm in data.smarty.section&&part.type=='text'&&process([node.parts[0]],data)!='smarty')
{nm=data.smarty.section[nm].index;}
if(!nm&&typeof val!='undefined'&&v instanceof Array)
{nm=v.length;}
if(typeof val!='undefined'&&i==node.parts.length-1)
{v[nm]=val;}
if(typeof v=='object'&&v!==null&&nm in v)
{v=v[nm];}
else
{if(typeof val=='undefined')
{return val;}
v[nm]={};v=v[nm];}}}
return v;}
function process(tree,data)
{var res='';for(var i=0;i<tree.length;++i)
{var s='';var node=tree[i];if(node.type=='text')
{s=node.data;}
else if(node.type=='var')
{s=getVarValue(node,data);}
else if(node.type=='build-in')
{s=buildInFunctions[node.name].process(node,data);}
else if(node.type=='plugin')
{var plugin=plugins[node.name];if(plugin.type=='block')
{var repeat={value:true};plugin.process(getActualParamValues(node.params,data),'',data,repeat);while(repeat.value)
{repeat.value=false;s+=plugin.process(getActualParamValues(node.params,data),process(node.subTree,data),data,repeat);}}
else if(plugin.type=='function')
{s=plugin.process(getActualParamValues(node.params,data),data);}}
if(typeof s=='boolean')
{s=s?'1':'';}
if(tree.length==1)
{return s;}
res+=s;if(data.smarty['continue']||data.smarty['break'])
{return res;}}
return res;}
function getTemplate(name,tree,nocache)
{if(nocache||!(name in files))
{var tpl=jSmart.prototype.getTemplate(name);if(typeof(tpl)!='string')
{throw new Error('No template for '+name);}
parse(applyFilters(jSmart.prototype.filters_global.pre,stripComments(tpl.replace(/\r\n/g,'\n'))),tree);files[name]=tree;}
else
{tree=files[name];}
return tree;}
function stripComments(s)
{var sRes='';for(var openTag=s.match(/{\*/);openTag;openTag=s.match(/{\*/))
{sRes+=s.slice(0,openTag.index);s=s.slice(openTag.index+openTag[0].length);var closeTag=s.match(/\*}/);if(!closeTag)
{throw new Error('Unclosed {*');}
s=s.slice(closeTag.index+closeTag[0].length);}
return sRes+s;}
function applyFilters(filters,s)
{for(var i=0;i<filters.length;++i)
{s=filters[i](s);}
return s;}
jSmart=function(tpl)
{this.tree=[];this.tree.blocks={};this.scripts={};this.default_modifiers=[];this.filters={'variable':[],'post':[]};this.smarty={'smarty':{block:{},'break':false,capture:{},'continue':false,counter:{},cycle:{},foreach:{},section:{},now:Math.floor((new Date()).getTime()/1000),'const':{},config:{},current_dir:'/',template:'',ldelim:jSmart.prototype.left_delimiter,rdelim:jSmart.prototype.right_delimiter,version:'2.13.1'}};blocks=this.tree.blocks;parse(applyFilters(jSmart.prototype.filters_global.pre,stripComments((new String(tpl?tpl:'')).replace(/\r\n/g,'\n'))),this.tree);};jSmart.prototype.fetch=function(data)
{blocks=this.tree.blocks;scripts=this.scripts;escape_html=this.escape_html;default_modifiers=jSmart.prototype.default_modifiers_global.concat(this.default_modifiers);this.data=obMerge((typeof data=='object')?data:{},this.smarty);varFilters=jSmart.prototype.filters_global.variable.concat(this.filters.variable);var res=process(this.tree,this.data);if(jSmart.prototype.debugging)
{plugins.debug.process([],this.data);}
return applyFilters(jSmart.prototype.filters_global.post.concat(this.filters.post),res);};jSmart.prototype.escape_html=false;jSmart.prototype.registerPlugin=function(type,name,callback)
{if(type=='modifier')
{modifiers[name]=callback;}
else
{plugins[name]={'type':type,'process':callback};}};jSmart.prototype.registerFilter=function(type,callback)
{(this.tree?this.filters:jSmart.prototype.filters_global)[type=='output'?'post':type].push(callback);}
jSmart.prototype.filters_global={'pre':[],'variable':[],'post':[]};jSmart.prototype.configLoad=function(confValues,section,data)
{data=data?data:this.data;var s=confValues.replace(/\r\n/g,'\n').replace(/^\s+|\s+$/g,'');var re=/^\s*(?:\[([^\]]+)\]|(?:(\w+)[ \t]*=[ \t]*("""|'[^'\\\n]*(?:\\.[^'\\\n]*)*'|"[^"\\\n]*(?:\\.[^"\\\n]*)*"|[^\n]*)))/m;var currSect='';for(var f=s.match(re);f;f=s.match(re))
{s=s.slice(f.index+f[0].length);if(f[1])
{currSect=f[1];}
else if((!currSect||currSect==section)&&currSect.substr(0,1)!='.')
{if(f[3]=='"""')
{var triple=s.match(/"""/);if(triple)
{data.smarty.config[f[2]]=s.slice(0,triple.index);s=s.slice(triple.index+triple[0].length);}}
else
{data.smarty.config[f[2]]=trimQuotes(f[3]);}}
var newln=s.match(/\n+/);if(newln)
{s=s.slice(newln.index+newln[0].length);}
else
{break;}}}
jSmart.prototype.clearConfig=function(varName)
{if(varName)
{delete this.data.smarty.config[varName];}
else
{this.data.smarty.config={};}}
jSmart.prototype.addDefaultModifier=function(modifiers)
{if(!(modifiers instanceof Array))
{modifiers=[modifiers];}
for(var i=0;i<modifiers.length;++i)
{var e={value:'',tree:[0]};parseModifiers('|'+modifiers[i],e);(this.tree?this.default_modifiers:this.default_modifiers_global).push(e.tree[0]);}}
jSmart.prototype.default_modifiers_global=[];jSmart.prototype.getTemplate=function(name)
{throw new Error('No template for '+name);}
jSmart.prototype.getFile=function(name)
{throw new Error('No file for '+name);}
jSmart.prototype.getJavascript=function(name)
{throw new Error('No Javascript for '+name);}
jSmart.prototype.getConfig=function(name)
{throw new Error('No config for '+name);}
jSmart.prototype.auto_literal=true;jSmart.prototype.left_delimiter='{';jSmart.prototype.right_delimiter='}';jSmart.prototype.debugging=false;jSmart.prototype.PHPJS=function(fnm,modifier)
{if(eval('typeof '+fnm)=='function')
{return(typeof window=='object')?window:global;}
else if(typeof(PHP_JS)=='function')
{return new PHP_JS();}
throw new Error("Modifier '"+modifier+"' uses JavaScript port of PHP function '"+fnm+"'. You can find one at http://phpjs.org");}
jSmart.prototype.makeTimeStamp=function(s)
{if(!s)
{return Math.floor((new Date()).getTime()/1000);}
if(isNaN(s))
{var tm=jSmart.prototype.PHPJS('strtotime','date_format').strtotime(s);if(tm==-1||tm===false){return Math.floor((new Date()).getTime()/1000);}
return tm;}
s=new String(s);if(s.length==14)
{return Math.floor((new Date(s.substr(0,4),s.substr(4,2)-1,s.substr(6,2),s.substr(8,2),s.substr(10,2)).getTime()/1000));}
return parseInt(s);}
jSmart.prototype.registerPlugin('function','__array',function(params,data)
{var a=[];for(var nm in params)
{if(params.hasOwnProperty(nm)&&params[nm]&&typeof params[nm]!='function')
{a[nm]=params[nm];}}
return a;});jSmart.prototype.registerPlugin('function','__func',function(params,data)
{var paramNames=[];var paramValues={};for(var i=0;i<params.length;++i)
{paramNames.push(params.name+'__p'+i);paramValues[params.name+'__p'+i]=params[i];}
var fname=('__owner'in data&&params.name in data.__owner)?('__owner.'+params.name):params.name;return execute(fname+'('+paramNames.join(',')+')',obMerge({},data,paramValues));});jSmart.prototype.registerPlugin('function','__quoted',function(params,data)
{return params.join('');});jSmart.prototype.registerPlugin('function','append',function(params,data)
{var varName=params.__get('var',null,0);if(!(varName in data)||!(data[varName]instanceof Array))
{data[varName]=[];}
var index=params.__get('index',false);var val=params.__get('value',null,1);if(index===false)
{data[varName].push(val);}
else
{data[varName][index]=val;}
return'';});jSmart.prototype.registerPlugin('function','assign',function(params,data)
{assignVar(params.__get('var',null,0),params.__get('value',null,1),data);return'';});jSmart.prototype.registerPlugin('function','break',function(params,data)
{data.smarty['break']=true;return'';});jSmart.prototype.registerPlugin('function','call',function(params,data)
{var fname=params.__get('name',null,0);delete params.name;var assignTo=params.__get('assign',false);delete params.assign;var s=plugins[fname].process(params,data);if(assignTo)
{assignVar(assignTo,s,data);return'';}
return s;});jSmart.prototype.registerPlugin('block','capture',function(params,content,data,repeat)
{if(content)
{content=content.replace(/^\n/,'');data.smarty.capture[params.__get('name','default',0)]=content;if('assign'in params)
{assignVar(params.assign,content,data);}
var append=params.__get('append',false);if(append)
{if(append in data)
{if(data[append]instanceof Array)
{data[append].push(content);}}
else
{data[append]=[content];}}}
return'';});jSmart.prototype.registerPlugin('function','continue',function(params,data)
{data.smarty['continue']=true;return'';});jSmart.prototype.registerPlugin('function','counter',function(params,data)
{var name=params.__get('name','default');if(name in data.smarty.counter)
{var counter=data.smarty.counter[name];if('start'in params)
{counter.value=parseInt(params['start']);}
else
{counter.value=parseInt(counter.value);counter.skip=parseInt(counter.skip);if('down'==counter.direction)
{counter.value-=counter.skip;}
else
{counter.value+=counter.skip;}}
counter.skip=params.__get('skip',counter.skip);counter.direction=params.__get('direction',counter.direction);counter.assign=params.__get('assign',counter.assign);}
else
{data.smarty.counter[name]={value:parseInt(params.__get('start',1)),skip:parseInt(params.__get('skip',1)),direction:params.__get('direction','up'),assign:params.__get('assign',false)};}
if(data.smarty.counter[name].assign)
{data[data.smarty.counter[name].assign]=data.smarty.counter[name].value;return'';}
if(params.__get('print',true))
{return data.smarty.counter[name].value;}
return'';});jSmart.prototype.registerPlugin('function','cycle',function(params,data)
{var name=params.__get('name','default');var reset=params.__get('reset',false);if(!(name in data.smarty.cycle))
{data.smarty.cycle[name]={arr:[''],delimiter:params.__get('delimiter',','),index:0};reset=true;}
if(params.__get('delimiter',false))
{data.smarty.cycle[name].delimiter=params.delimiter;}
var values=params.__get('values',false);if(values)
{var arr=[];if(values instanceof Object)
{for(nm in values)
{arr.push(values[nm]);}}
else
{arr=values.split(data.smarty.cycle[name].delimiter);}
if(arr.length!=data.smarty.cycle[name].arr.length||arr[0]!=data.smarty.cycle[name].arr[0])
{data.smarty.cycle[name].arr=arr;data.smarty.cycle[name].index=0;reset=true;}}
if(params.__get('advance','true'))
{data.smarty.cycle[name].index+=1;}
if(data.smarty.cycle[name].index>=data.smarty.cycle[name].arr.length||reset)
{data.smarty.cycle[name].index=0;}
if(params.__get('assign',false))
{assignVar(params.assign,data.smarty.cycle[name].arr[data.smarty.cycle[name].index],data);return'';}
if(params.__get('print',true))
{return data.smarty.cycle[name].arr[data.smarty.cycle[name].index];}
return'';});jSmart.prototype.print_r=function(v,indent)
{if(v instanceof Object)
{var s=((v instanceof Array)?'Array['+v.length+']':'Object')+'<br>';for(var nm in v)
{if(v.hasOwnProperty(nm))
{s+=indent+'&nbsp;&nbsp;<strong>'+nm+'</strong> : '+jSmart.prototype.print_r(v[nm],indent+'&nbsp;&nbsp;&nbsp;')+'<br>';}}
return s;}
return v;}
jSmart.prototype.registerPlugin('function','debug',function(params,data)
{if(typeof dbgWnd!='undefined')
{dbgWnd.close();}
dbgWnd=window.open('','','width=680,height=600,resizable,scrollbars=yes');var sVars='';var i=0;for(var nm in data)
{sVars+='<tr class='+(++i%2?'odd':'even')+'><td><strong>'+nm+'</strong></td><td>'+jSmart.prototype.print_r(data[nm],'')+'</td></tr>';}
dbgWnd.document.write(" \
               <html xmlns='http://www.w3.org/1999/xhtml' xml:lang='en'> \
               <head> \
              <title>jSmart Debug Console</title> \
                  <style type='text/css'> \
                     table {width: 100%;} \
                     td {vertical-align:top;width: 50%;} \
                     .even td {background-color: #fafafa;} \
                  </style> \
               </head> \
               <body> \
                  <h1>jSmart Debug Console</h1> \
                  <h2>assigned template variables</h2> \
                  <table>"+sVars+"</table> \
               </body> \
               </html> \
            ");return'';});jSmart.prototype.registerPlugin('function','eval',function(params,data)
{var tree=[];parse(params.__get('var','',0),tree);var s=process(tree,data);if('assign'in params)
{assignVar(params.assign,s,data);return'';}
return s;});jSmart.prototype.registerPlugin('function','fetch',function(params,data)
{var s=jSmart.prototype.getFile(params.__get('file',null,0));if('assign'in params)
{assignVar(params.assign,s,data);return'';}
return s;});jSmart.prototype.registerPlugin('function','html_checkboxes',function(params,data){var type=params.__get('type','checkbox'),name=params.__get('name',type),realName=params.__get('name',type),values=params.__get('values',params.options),output=params.__get('options',[]),useName=('options'in params),selected=params.__get('selected',false),separator=params.__get('separator',''),labels=Boolean(params.__get('labels',true)),label_ids=Boolean(params.__get('label_ids',false)),p,res=[],i=0,s='',value,id;if(type=='checkbox'){name+='[]';}
if(!useName){for(p in params.output){output.push(params.output[p]);}}
for(p in values){if(values.hasOwnProperty(p)){value=(useName?p:values[p]);id=realName+'_'+value;s=(labels?(label_ids?'<label for="'+id+'">':'<label>'):'');s+='<input type="'+type+'" name="'+name+'" value="'+value+'" ';if(label_ids){s+='id="'+id+'" ';}
if(selected==(useName?p:values[p])){s+='checked="checked" ';}
s+='/>'+output[useName?p:i++];s+=(labels?'</label>':'');s+=separator;res.push(s);}}
if('assign'in params){assignVar(params.assign,res,data);return'';}
return res.join('\n');});jSmart.prototype.registerPlugin('function','html_image',function(params,data){var url=params.__get('file',null),width=params.__get('width',false),height=params.__get('height',false),alt=params.__get('alt',''),href=params.__get('href',params.__get('link',false)),path_prefix=params.__get('path_prefix',''),paramNames={file:1,width:1,height:1,alt:1,href:1,basedir:1,path_prefix:1,link:1},s='<img src="'+path_prefix+url+'"'+' alt="'+alt+'"'+(width?' width="'+width+'"':'')+(height?' height="'+height+'"':''),p;for(p in params){if(params.hasOwnProperty(p)&&typeof(params[p])=='string'){if(!(p in paramNames)){s+=' '+p+'="'+params[p]+'"';}}}
s+=' />';return href?'<a href="'+href+'">'+s+'</a>':s;});jSmart.prototype.registerPlugin('function','html_options',function(params,data)
{var values=params.__get('values',params.options);var output=params.__get('options',[]);var useName=('options'in params);var p;if(!useName)
{for(p in params.output)
{output.push(params.output[p]);}}
var selected=params.__get('selected',false);var res=[];var s='';var i=0;for(p in values)
{if(values.hasOwnProperty(p))
{s='<option value="'+(useName?p:values[p])+'"';if(selected==(useName?p:values[p]))
{s+=' selected="selected"';}
s+='>'+output[useName?p:i++]+'</option>';res.push(s);}}
var name=params.__get('name',false);return(name?('<select name="'+name+'">\n'+res.join('\n')+'\n</select>'):res.join('\n'))+'\n';});jSmart.prototype.registerPlugin('function','html_radios',function(params,data)
{params.type='radio';return plugins.html_checkboxes.process(params,data);});jSmart.prototype.registerPlugin('function','html_select_date',function(params,data)
{var prefix=params.__get('prefix','Date_');var months=['January','February','March','April','May','June','July','August','September','October','November','December'];var s='';s+='<select name="'+prefix+'Month">\n';var i=0;for(i=0;i<months.length;++i)
{s+='<option value="'+i+'">'+months[i]+'</option>\n';}
s+='</select>\n'
s+='<select name="'+prefix+'Day">\n';for(i=0;i<31;++i)
{s+='<option value="'+i+'">'+i+'</option>\n';}
s+='</select>\n'
return s;});jSmart.prototype.registerPlugin('function','html_table',function(params,data)
{var loop=[];var p;if(params.loop instanceof Array)
{loop=params.loop}
else
{for(p in params.loop)
{if(params.loop.hasOwnProperty(p))
{loop.push(params.loop[p]);}}}
var rows=params.__get('rows',false);var cols=params.__get('cols',false);if(!cols)
{cols=rows?Math.ceil(loop.length/rows):3;}
var colNames=[];if(isNaN(cols))
{if(typeof cols=='object')
{for(p in cols)
{if(cols.hasOwnProperty(p))
{colNames.push(cols[p]);}}}
else
{colNames=cols.split(/\s*,\s*/);}
cols=colNames.length;}
rows=rows?rows:Math.ceil(loop.length/cols);var inner=params.__get('inner','cols');var caption=params.__get('caption','');var table_attr=params.__get('table_attr','border="1"');var th_attr=params.__get('th_attr',false);if(th_attr&&typeof th_attr!='object')
{th_attr=[th_attr];}
var tr_attr=params.__get('tr_attr',false);if(tr_attr&&typeof tr_attr!='object')
{tr_attr=[tr_attr];}
var td_attr=params.__get('td_attr',false);if(td_attr&&typeof td_attr!='object')
{td_attr=[td_attr];}
var trailpad=params.__get('trailpad','&nbsp;');var hdir=params.__get('hdir','right');var vdir=params.__get('vdir','down');var s='';for(var row=0;row<rows;++row)
{s+='<tr'+(tr_attr?' '+tr_attr[row%tr_attr.length]:'')+'>\n';for(var col=0;col<cols;++col)
{var idx=(inner=='cols')?((vdir=='down'?row:rows-1-row)*cols+(hdir=='right'?col:cols-1-col)):((hdir=='right'?col:cols-1-col)*rows+(vdir=='down'?row:rows-1-row));s+='<td'+(td_attr?' '+td_attr[col%td_attr.length]:'')+'>'+(idx<loop.length?loop[idx]:trailpad)+'</td>\n';}
s+='</tr>\n';}
var sHead='';if(colNames.length)
{sHead='\n<thead><tr>';for(var i=0;i<colNames.length;++i)
{sHead+='\n<th'+(th_attr?' '+th_attr[i%th_attr.length]:'')+'>'+colNames[hdir=='right'?i:colNames.length-1-i]+'</th>';}
sHead+='\n</tr></thead>';}
return'<table '+table_attr+'>'+(caption?'\n<caption>'+caption+'</caption>':'')+sHead+'\n<tbody>\n'+s+'</tbody>\n</table>\n';});jSmart.prototype.registerPlugin('function','include',function(params,data)
{var file=params.__get('file',null,0);var incData=obMerge({},data,params);incData.smarty.template=file;var s=process(getTemplate(file,[],findInArray(params,'nocache')>=0),incData);if('assign'in params)
{assignVar(params.assign,s,data);return'';}
return s;});jSmart.prototype.registerPlugin('function','include_javascript',function(params,data)
{var file=params.__get('file',null,0);if(params.__get('once',true)&&file in scripts)
{return'';}
scripts[file]=true;var s=execute(jSmart.prototype.getJavascript(file),{'$this':data});if('assign'in params)
{assignVar(params.assign,s,data);return'';}
return s;});jSmart.prototype.registerPlugin('function','include_php',function(params,data)
{return plugins['include_javascript'].process(params,data);});jSmart.prototype.registerPlugin('function','insert',function(params,data)
{var fparams={};for(var nm in params)
{if(params.hasOwnProperty(nm)&&isNaN(nm)&&params[nm]&&typeof params[nm]=='string'&&nm!='name'&&nm!='assign'&&nm!='script')
{fparams[nm]=params[nm];}}
var prefix='insert_';if('script'in params)
{eval(jSmart.prototype.getJavascript(params.script));prefix='smarty_insert_';}
var func=eval(prefix+params.__get('name',null,0));var s=func(fparams,data);if('assign'in params)
{assignVar(params.assign,s,data);return'';}
return s;});jSmart.prototype.registerPlugin('block','javascript',function(params,content,data,repeat)
{data['$this']=data;execute(content,data);delete data['$this'];return'';});jSmart.prototype.registerPlugin('function','config_load',function(params,data)
{jSmart.prototype.configLoad(jSmart.prototype.getConfig(params.__get('file',null,0)),params.__get('section','',1),data);return'';});jSmart.prototype.registerPlugin('function','mailto',function(params,data)
{var address=params.__get('address',null);var encode=params.__get('encode','none');var text=params.__get('text',address);var cc=jSmart.prototype.PHPJS('rawurlencode','mailto').rawurlencode(params.__get('cc','')).replace('%40','@');var bcc=jSmart.prototype.PHPJS('rawurlencode','mailto').rawurlencode(params.__get('bcc','')).replace('%40','@');var followupto=jSmart.prototype.PHPJS('rawurlencode','mailto').rawurlencode(params.__get('followupto','')).replace('%40','@');var subject=jSmart.prototype.PHPJS('rawurlencode','mailto').rawurlencode(params.__get('subject',''));var newsgroups=jSmart.prototype.PHPJS('rawurlencode','mailto').rawurlencode(params.__get('newsgroups',''));var extra=params.__get('extra','');address+=(cc?'?cc='+cc:'');address+=(bcc?(cc?'&':'?')+'bcc='+bcc:'');address+=(subject?((cc||bcc)?'&':'?')+'subject='+subject:'');address+=(newsgroups?((cc||bcc||subject)?'&':'?')+'newsgroups='+newsgroups:'');address+=(followupto?((cc||bcc||subject||newsgroups)?'&':'?')+'followupto='+followupto:'');s='<a href="mailto:'+address+'" '+extra+'>'+text+'</a>';if(encode=='javascript')
{s="document.write('"+s+"');";var sEncoded='';for(var i=0;i<s.length;++i)
{sEncoded+='%'+jSmart.prototype.PHPJS('bin2hex','mailto').bin2hex(s.substr(i,1));}
return'<script type="text/javascript">eval(unescape(\''+sEncoded+"'))</script>";}
else if(encode=='javascript_charcode')
{var codes=[];for(var i=0;i<s.length;++i)
{codes.push(jSmart.prototype.PHPJS('ord','mailto').ord(s.substr(i,1)));}
return'<script type="text/javascript" language="javascript">\n<!--\n{document.write(String.fromCharCode('
+codes.join(',')+'))}\n//-->\n</script>\n';}
else if(encode=='hex')
{if(address.match(/^.+\?.+$/))
{throw new Error('mailto: hex encoding does not work with extra attributes. Try javascript.');}
var aEncoded='';for(var i=0;i<address.length;++i)
{if(address.substr(i,1).match(/\w/))
{aEncoded+='%'+jSmart.prototype.PHPJS('bin2hex','mailto').bin2hex(address.substr(i,1));}
else
{aEncoded+=address.substr(i,1);}}
var tEncoded='';for(var i=0;i<text.length;++i)
{tEncoded+='&#x'+jSmart.prototype.PHPJS('bin2hex','mailto').bin2hex(text.substr(i,1))+';';}
return'<a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;'+aEncoded+'" '+extra+'>'+tEncoded+'</a>';}
return s;});jSmart.prototype.registerPlugin('function','math',function(params,data)
{with(Math)
{with(params)
{var res=eval(params.__get('equation',null).replace(/pi\(\s*\)/g,'PI'));}}
if('format'in params)
{res=jSmart.prototype.PHPJS('sprintf','math').sprintf(params.format,res);}
if('assign'in params)
{assignVar(params.assign,res,data);return'';}
return res;});jSmart.prototype.registerPlugin('block','nocache',function(params,content,data,repeat)
{return content;});jSmart.prototype.registerPlugin('block','textformat',function(params,content,data,repeat)
{if(!content){return'';}
var wrap=params.__get('wrap',80);var wrap_char=params.__get('wrap_char','\n');var wrap_cut=params.__get('wrap_cut',false);var indent_char=params.__get('indent_char',' ');var indent=params.__get('indent',0);var indentStr=(new Array(indent+1)).join(indent_char);var indent_first=params.__get('indent_first',0);var indentFirstStr=(new Array(indent_first+1)).join(indent_char);var style=params.__get('style','');if(style=='email'){wrap=72;}
var paragraphs=content.split(/[\r\n]{2}/);for(var i=0;i<paragraphs.length;++i){var p=paragraphs[i];if(!p){continue;}
p=p.replace(/^\s+|\s+$/,'').replace(/\s+/g,' ');if(indent_first>0){p=indentFirstStr+p;}
p=modifiers.wordwrap(p,wrap-indent,wrap_char,wrap_cut);if(indent>0){p=p.replace(/^/mg,indentStr);}
paragraphs[i]=p;}
var s=paragraphs.join(wrap_char+wrap_char);if('assign'in params)
{assignVar(params.assign,s,data);return'';}
return s;});jSmart.prototype.registerPlugin('modifier','capitalize',function(s,withDigits)
{var re=new RegExp(withDigits?'[\\W\\d]+':'\\W+');var found=null;var res='';for(found=s.match(re);found;found=s.match(re))
{var word=s.slice(0,found.index);if(word.match(/\d/))
{res+=word;}
else
{res+=word.charAt(0).toUpperCase()+word.slice(1);}
res+=s.slice(found.index,found.index+found[0].length);s=s.slice(found.index+found[0].length);}
if(s.match(/\d/))
{return res+s;}
return res+s.charAt(0).toUpperCase()+s.slice(1);});jSmart.prototype.registerPlugin('modifier','cat',function(s,value)
{value=value?value:'';return s+value;});jSmart.prototype.registerPlugin('modifier','count',function(v,recursive)
{if(v===null||typeof v==='undefined'){return 0;}else if(v.constructor!==Array&&v.constructor!==Object){return 1;}
recursive=Boolean(recursive);var k,cnt=0;for(k in v)
{if(v.hasOwnProperty(k))
{cnt++;if(recursive&&v[k]&&(v[k].constructor===Array||v[k].constructor===Object)){cnt+=modifiers.count(v[k],true);}}}
return cnt;});jSmart.prototype.registerPlugin('modifier','count_characters',function(s,includeWhitespaces)
{return includeWhitespaces?s.length:s.replace(/\s/g,'').length;});jSmart.prototype.registerPlugin('modifier','count_paragraphs',function(s)
{var found=s.match(/\n+/g);if(found)
{return found.length+1;}
return 1;});jSmart.prototype.registerPlugin('modifier','count_sentences',function(s)
{var found=s.match(/[^\s]\.(?!\w)/g);if(found)
{return found.length;}
return 0;});jSmart.prototype.registerPlugin('modifier','count_words',function(s)
{var found=s.match(/\w+/g);if(found)
{return found.length;}
return 0;});jSmart.prototype.registerPlugin('modifier','date_format',function(s,fmt,defaultDate)
{return jSmart.prototype.PHPJS('strftime','date_format').strftime(fmt?fmt:'%b %e, %Y',jSmart.prototype.makeTimeStamp(s?s:defaultDate));});jSmart.prototype.registerPlugin('modifier','defaultValue',function(s,value)
{return(s&&s!='null'&&s!='undefined')?s:(value?value:'');});jSmart.prototype.registerPlugin('modifier','unescape',function(s,esc_type,char_set)
{s=new String(s);esc_type=esc_type||'html';char_set=char_set||'UTF-8';switch(esc_type)
{case'html':return s.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&#039;/g,"'").replace(/&quot;/g,'"');case'entity':case'htmlall':return jSmart.prototype.PHPJS('html_entity_decode','unescape').html_entity_decode(s,char_set);case'url':return jSmart.prototype.PHPJS('rawurldecode','unescape').rawurldecode(s);};return s;});jSmart.prototype.registerPlugin('modifier','escape',function(s,esc_type,char_set,double_encode)
{s=new String(s);esc_type=esc_type||'html';char_set=char_set||'UTF-8';double_encode=(typeof double_encode!='undefined')?Boolean(double_encode):true;switch(esc_type)
{case'html':if(double_encode){s=s.replace(/&/g,'&amp;');}
return s.replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/'/g,'&#039;').replace(/"/g,'&quot;');case'htmlall':return jSmart.prototype.PHPJS('htmlentities','escape').htmlentities(s,3,char_set);case'url':return jSmart.prototype.PHPJS('rawurlencode','escape').rawurlencode(s);case'urlpathinfo':return jSmart.prototype.PHPJS('rawurlencode','escape').rawurlencode(s).replace(/%2F/g,'/');case'quotes':return s.replace(/(^|[^\\])'/g,"$1\\'");case'hex':var res='';for(var i=0;i<s.length;++i)
{res+='%'+jSmart.prototype.PHPJS('bin2hex','escape').bin2hex(s.substr(i,1));}
return res;case'hexentity':var res='';for(var i=0;i<s.length;++i){res+='&#x'+jSmart.prototype.PHPJS('bin2hex','escape').bin2hex(s.substr(i,1)).toUpperCase()+';';}
return res;case'decentity':var res='';for(var i=0;i<s.length;++i){res+='&#'+jSmart.prototype.PHPJS('ord','escape').ord(s.substr(i,1))+';';}
return res;case'mail':return s.replace(/@/g,' [AT] ').replace(/[.]/g,' [DOT] ');case'nonstd':var res='';for(var i=0;i<s.length;++i)
{var _ord=jSmart.prototype.PHPJS('ord','escape').ord(s.substr(i,1));if(_ord>=126){res+='&#'+_ord+';';}else{res+=s.substr(i,1);}}
return res;case'javascript':return s.replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/"/g,'\\"').replace(/\r/g,'\\r').replace(/\n/g,'\\n').replace(/<\//g,'<\/');};return s;});jSmart.prototype.registerPlugin('modifier','indent',function(s,repeat,indentWith)
{repeat=repeat?repeat:4;indentWith=indentWith?indentWith:' ';var indentStr='';while(repeat--)
{indentStr+=indentWith;}
var tail=s.match(/\n+$/);return indentStr+s.replace(/\n+$/,'').replace(/\n/g,'\n'+indentStr)+(tail?tail[0]:'');});jSmart.prototype.registerPlugin('modifier','lower',function(s)
{return s.toLowerCase();});jSmart.prototype.registerPlugin('modifier','nl2br',function(s)
{return s.replace(/\n/g,'<br />\n');});jSmart.prototype.registerPlugin('modifier','regex_replace',function(s,re,replaceWith)
{var pattern=re.match(/^ *\/(.*)\/(.*) *$/);return(new String(s)).replace(new RegExp(pattern[1],'g'+(pattern.length>1?pattern[2]:'')),replaceWith);});jSmart.prototype.registerPlugin('modifier','replace',function(s,search,replaceWith)
{if(!search)
{return s;}
s=new String(s);search=new String(search);replaceWith=new String(replaceWith);var res='';var pos=-1;for(pos=s.indexOf(search);pos>=0;pos=s.indexOf(search))
{res+=s.slice(0,pos)+replaceWith;pos+=search.length;s=s.slice(pos);}
return res+s;});jSmart.prototype.registerPlugin('modifier','spacify',function(s,space)
{if(!space)
{space=' ';}
return s.replace(/(\n|.)(?!$)/g,'$1'+space);});jSmart.prototype.registerPlugin('modifier','noprint',function(s)
{return'';});jSmart.prototype.registerPlugin('modifier','string_format',function(s,fmt)
{return jSmart.prototype.PHPJS('sprintf','string_format').sprintf(fmt,s);});jSmart.prototype.registerPlugin('modifier','strip',function(s,replaceWith)
{replaceWith=replaceWith?replaceWith:' ';return(new String(s)).replace(/[\s]+/g,replaceWith);});jSmart.prototype.registerPlugin('modifier','strip_tags',function(s,addSpace)
{addSpace=(addSpace==null)?true:addSpace;return(new String(s)).replace(/<[^>]*?>/g,addSpace?' ':'');});jSmart.prototype.registerPlugin('modifier','truncate',function(s,length,etc,breakWords,middle)
{length=length?length:80;etc=(etc!=null)?etc:'...';if(s.length<=length)
{return s;}
length-=Math.min(length,etc.length);if(middle)
{return s.slice(0,Math.floor(length/2))+etc+s.slice(s.length-Math.floor(length/2));}
if(!breakWords)
{s=s.slice(0,length+1).replace(/\s+?(\S+)?$/,'');}
return s.slice(0,length)+etc;});jSmart.prototype.registerPlugin('modifier','upper',function(s)
{return s.toUpperCase();});jSmart.prototype.registerPlugin('modifier','wordwrap',function(s,width,wrapWith,breakWords)
{width=width||80;wrapWith=wrapWith||'\n';var lines=s.split('\n');for(var i=0;i<lines.length;++i)
{var line=lines[i];var parts=''
while(line.length>width)
{var pos=0;var found=line.slice(pos).match(/\s+/);for(;found&&(pos+found.index)<=width;found=line.slice(pos).match(/\s+/))
{pos+=found.index+found[0].length;}
pos=pos||(breakWords?width:(found?found.index+found[0].length:line.length));parts+=line.slice(0,pos).replace(/\s+$/,'');if(pos<line.length)
{parts+=wrapWith;}
line=line.slice(pos);}
lines[i]=parts+line;}
return lines.join('\n');});String.prototype.fetch=function(data)
{var tpl=new jSmart(this);return tpl.fetch(data);};})();


/* PHP function strftime() */
function strftime(fmt,timestamp){this.php_js=this.php_js||{};this.setlocale('LC_ALL',0);var phpjs=this.php_js;var _xPad=function(x,pad,r){if(typeof r==='undefined'){r=10}for(;parseInt(x,10)<r&&r>1;r/=10){x=pad.toString()+x}return x.toString()};var locale=phpjs.localeCategories.LC_TIME;var locales=phpjs.locales;var lc_time=locales[locale].LC_TIME;var _formats={a:function(d){return lc_time.a[d.getDay()]},A:function(d){return lc_time.A[d.getDay()]},b:function(d){return lc_time.b[d.getMonth()]},B:function(d){return lc_time.B[d.getMonth()]},C:function(d){return _xPad(parseInt(d.getFullYear()/100,10),0)},d:['getDate','0'],e:['getDate',' '],g:function(d){return _xPad(parseInt(this.G(d)/100,10),0)},G:function(d){var y=d.getFullYear();var V=parseInt(_formats.V(d),10);var W=parseInt(_formats.W(d),10);if(W>V){y++}else if(W===0&&V>=52){y--}return y},H:['getHours','0'],I:function(d){var I=d.getHours()%12;return _xPad(I===0?12:I,0)},j:function(d){var ms=d-new Date(''+d.getFullYear()+'/1/1 GMT');ms+=d.getTimezoneOffset()*60000;var doy=parseInt(ms/60000/ 60 /24,10)+1;return _xPad(doy,0,100)},k:['getHours','0'],l:function(d){var l=d.getHours()%12;return _xPad(l===0?12:l,' ')},m:function(d){return _xPad(d.getMonth()+1,0)},M:['getMinutes','0'],p:function(d){return lc_time.p[d.getHours()>=12?1:0]},P:function(d){return lc_time.P[d.getHours()>=12?1:0]},s:function(d){return Date.parse(d)/1000},S:['getSeconds','0'],u:function(d){var dow=d.getDay();return((dow===0)?7:dow)},U:function(d){var doy=parseInt(_formats.j(d),10);var rdow=6-d.getDay();var woy=parseInt((doy+rdow)/7,10);return _xPad(woy,0)},V:function(d){var woy=parseInt(_formats.W(d),10);var dow1_1=(new Date(''+d.getFullYear()+'/1/1')).getDay();var idow=woy+(dow1_1>4||dow1_1<=1?0:1);if(idow===53&&(new Date(''+d.getFullYear()+'/12/31')).getDay()<4){idow=1}else if(idow===0){idow=_formats.V(new Date(''+(d.getFullYear()-1)+'/12/31'))}return _xPad(idow,0)},w:'getDay',W:function(d){var doy=parseInt(_formats.j(d),10);var rdow=7-_formats.u(d);var woy=parseInt((doy+rdow)/7,10);return _xPad(woy,0,10)},y:function(d){return _xPad(d.getFullYear()%100,0)},Y:'getFullYear',z:function(d){var o=d.getTimezoneOffset();var H=_xPad(parseInt(Math.abs(o/60),10),0);var M=_xPad(o%60,0);return(o>0?'-':'+')+H+M},Z:function(d){return d.toString().replace(/^.*\(([^)]+)\)$/,'$1')},'%':function(d){return'%'}};var _date=((typeof timestamp==='undefined')?new Date():(typeof timestamp==='object')?new Date(timestamp):new Date(timestamp*1000));var _aggregates={c:'locale',D:'%m/%d/%y',F:'%y-%m-%d',h:'%b',n:'\n',r:'locale',R:'%H:%M',t:'\t',T:'%H:%M:%S',x:'locale',X:'locale'};while(fmt.match(/%[cDFhnrRtTxX]/)){fmt=fmt.replace(/%([cDFhnrRtTxX])/g,function(m0,m1){var f=_aggregates[m1];return(f==='locale'?lc_time[m1]:f)})}var str=fmt.replace(/%([aAbBCdegGHIjklmMpPsSuUVwWyYzZ%])/g,function(m0,m1){var f=_formats[m1];if(typeof f==='string'){return _date[f]()}else if(typeof f==='function'){return f(_date)}else if(typeof f==='object'&&typeof f[0]==='string'){return _xPad(_date[f[0]](),f[1])}else{return m1}});return str}function setlocale(category,locale){var categ='',cats=[],i=0,d=this.window.document;var _copy=function _copy(orig){if(orig instanceof RegExp){return new RegExp(orig)}else if(orig instanceof Date){return new Date(orig)}var newObj={};for(var i in orig){if(typeof orig[i]==='object'){newObj[i]=_copy(orig[i])}else{newObj[i]=orig[i]}}return newObj};var _nplurals1=function(n){return 0};var _nplurals2a=function(n){return n!==1?1:0};var _nplurals2b=function(n){return n>1?1:0};var _nplurals2c=function(n){return n%10===1&&n%100!==11?0:1};var _nplurals3a=function(n){return n%10===1&&n%100!==11?0:n!==0?1:2};var _nplurals3b=function(n){return n===1?0:n===2?1:2};var _nplurals3c=function(n){return n===1?0:(n===0||(n%100>0&&n%100<20))?1:2};var _nplurals3d=function(n){return n%10===1&&n%100!==11?0:n%10>=2&&(n%100<10||n%100>=20)?1:2};var _nplurals3e=function(n){return n%10===1&&n%100!==11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2};var _nplurals3f=function(n){return n===1?0:n>=2&&n<=4?1:2};var _nplurals3g=function(n){return n===1?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2};var _nplurals3h=function(n){return n%10===1?0:n%10===2?1:2};var _nplurals4a=function(n){return n%100===1?0:n%100===2?1:n%100===3||n%100===4?2:3};var _nplurals4b=function(n){return n===1?0:n===0||(n%100&&n%100<=10)?1:n%100>=11&&n%100<=19?2:3};var _nplurals5=function(n){return n===1?0:n===2?1:n>=3&&n<=6?2:n>=7&&n<=10?3:4};var _nplurals6=function(n){return n===0?5:n===1?0:n===2?1:n%100>=3&&n%100<=10?2:n%100>=11&&n%100<=99?3:4};try{this.php_js=this.php_js||{}}catch(e){this.php_js={}}var phpjs=this.php_js;if(!phpjs.locales){phpjs.locales={};phpjs.locales.en={'LC_COLLATE':function(str1,str2){return(str1==str2)?0:((str1>str2)?1:-1)},'LC_CTYPE':{an:/^[A-Za-z\d]+$/g,al:/^[A-Za-z]+$/g,ct:/^[\u0000-\u001F\u007F]+$/g,dg:/^[\d]+$/g,gr:/^[\u0021-\u007E]+$/g,lw:/^[a-z]+$/g,pr:/^[\u0020-\u007E]+$/g,pu:/^[\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E]+$/g,sp:/^[\f\n\r\t\v]+$/g,up:/^[A-Z]+$/g,xd:/^[A-Fa-f\d]+$/g,CODESET:'UTF-8',lower:'abcdefghijklmnopqrstuvwxyz',upper:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'},'LC_TIME':{a:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],A:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],b:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],B:['January','February','March','April','May','June','July','August','September','October','November','December'],c:'%a %d %b %Y %r %Z',p:['AM','PM'],P:['am','pm'],r:'%I:%M:%S %p',x:'%m/%d/%Y',X:'%r',alt_digits:'',ERA:'',ERA_YEAR:'',ERA_D_T_FMT:'',ERA_D_FMT:'',ERA_T_FMT:''},'LC_MONETARY':{int_curr_symbol:'USD',currency_symbol:'$',mon_decimal_point:'.',mon_thousands_sep:',',mon_grouping:[3],positive_sign:'',negative_sign:'-',int_frac_digits:2,frac_digits:2,p_cs_precedes:1,p_sep_by_space:0,n_cs_precedes:1,n_sep_by_space:0,p_sign_posn:3,n_sign_posn:0},'LC_NUMERIC':{decimal_point:'.',thousands_sep:',',grouping:[3]},'LC_MESSAGES':{YESEXPR:'^[yY].*',NOEXPR:'^[nN].*',YESSTR:'',NOSTR:''},nplurals:_nplurals2a};phpjs.locales.en_US=_copy(phpjs.locales.en);phpjs.locales.en_US.LC_TIME.c='%a %d %b %Y %r %Z';phpjs.locales.en_US.LC_TIME.x='%D';phpjs.locales.en_US.LC_TIME.X='%r';phpjs.locales.en_US.LC_MONETARY.int_curr_symbol='USD ';phpjs.locales.en_US.LC_MONETARY.p_sign_posn=1;phpjs.locales.en_US.LC_MONETARY.n_sign_posn=1;phpjs.locales.en_US.LC_MONETARY.mon_grouping=[3,3];phpjs.locales.en_US.LC_NUMERIC.thousands_sep='';phpjs.locales.en_US.LC_NUMERIC.grouping=[];phpjs.locales.en_GB=_copy(phpjs.locales.en);phpjs.locales.en_GB.LC_TIME.r='%l:%M:%S %P %Z';phpjs.locales.en_AU=_copy(phpjs.locales.en_GB);phpjs.locales.C=_copy(phpjs.locales.en);phpjs.locales.C.LC_CTYPE.CODESET='ANSI_X3.4-1968';phpjs.locales.C.LC_MONETARY={int_curr_symbol:'',currency_symbol:'',mon_decimal_point:'',mon_thousands_sep:'',mon_grouping:[],p_cs_precedes:127,p_sep_by_space:127,n_cs_precedes:127,n_sep_by_space:127,p_sign_posn:127,n_sign_posn:127,positive_sign:'',negative_sign:'',int_frac_digits:127,frac_digits:127};phpjs.locales.C.LC_NUMERIC={decimal_point:'.',thousands_sep:'',grouping:[]};phpjs.locales.C.LC_TIME.c='%a %b %e %H:%M:%S %Y';phpjs.locales.C.LC_TIME.x='%m/%d/%y';phpjs.locales.C.LC_TIME.X='%H:%M:%S';phpjs.locales.C.LC_MESSAGES.YESEXPR='^[yY]';phpjs.locales.C.LC_MESSAGES.NOEXPR='^[nN]';phpjs.locales.fr=_copy(phpjs.locales.en);phpjs.locales.fr.nplurals=_nplurals2b;phpjs.locales.fr.LC_TIME.a=['dim','lun','mar','mer','jeu','ven','sam'];phpjs.locales.fr.LC_TIME.A=['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];phpjs.locales.fr.LC_TIME.b=['jan','f\u00E9v','mar','avr','mai','jun','jui','ao\u00FB','sep','oct','nov','d\u00E9c'];phpjs.locales.fr.LC_TIME.B=['janvier','f\u00E9vrier','mars','avril','mai','juin','juillet','ao\u00FBt','septembre','octobre','novembre','d\u00E9cembre'];phpjs.locales.fr.LC_TIME.c='%a %d %b %Y %T %Z';phpjs.locales.fr.LC_TIME.p=['',''];phpjs.locales.fr.LC_TIME.P=['',''];phpjs.locales.fr.LC_TIME.x='%d.%m.%Y';phpjs.locales.fr.LC_TIME.X='%T';phpjs.locales.fr_CA=_copy(phpjs.locales.fr);phpjs.locales.fr_CA.LC_TIME.x='%Y-%m-%d'}if(!phpjs.locale){phpjs.locale='en_US';var NS_XHTML='http://www.w3.org/1999/xhtml';var NS_XML='http://www.w3.org/XML/1998/namespace';if(d.getElementsByTagNameNS&&d.getElementsByTagNameNS(NS_XHTML,'html')[0]){if(d.getElementsByTagNameNS(NS_XHTML,'html')[0].getAttributeNS&&d.getElementsByTagNameNS(NS_XHTML,'html')[0].getAttributeNS(NS_XML,'lang')){phpjs.locale=d.getElementsByTagName(NS_XHTML,'html')[0].getAttributeNS(NS_XML,'lang')}else if(d.getElementsByTagNameNS(NS_XHTML,'html')[0].lang){phpjs.locale=d.getElementsByTagNameNS(NS_XHTML,'html')[0].lang}}else if(d.getElementsByTagName('html')[0]&&d.getElementsByTagName('html')[0].lang){phpjs.locale=d.getElementsByTagName('html')[0].lang}}phpjs.locale=phpjs.locale.replace('-','_');if(!(phpjs.locale in phpjs.locales)){if(phpjs.locale.replace(/_[a-zA-Z]+$/,'')in phpjs.locales){phpjs.locale=phpjs.locale.replace(/_[a-zA-Z]+$/,'')}}if(!phpjs.localeCategories){phpjs.localeCategories={'LC_COLLATE':phpjs.locale,'LC_CTYPE':phpjs.locale,'LC_MONETARY':phpjs.locale,'LC_NUMERIC':phpjs.locale,'LC_TIME':phpjs.locale,'LC_MESSAGES':phpjs.locale}}if(locale===null||locale===''){locale=this.getenv(category)||this.getenv('LANG')}else if(Object.prototype.toString.call(locale)==='[object Array]'){for(i=0;i<locale.length;i++){if(!(locale[i]in this.php_js.locales)){if(i===locale.length-1){return false}continue}locale=locale[i];break}}if(locale==='0'||locale===0){if(category==='LC_ALL'){for(categ in this.php_js.localeCategories){cats.push(categ+'='+this.php_js.localeCategories[categ])}return cats.join(';')}return this.php_js.localeCategories[category]}if(!(locale in this.php_js.locales)){return false}if(category==='LC_ALL'){for(categ in this.php_js.localeCategories){this.php_js.localeCategories[categ]=locale}}else{this.php_js.localeCategories[category]=locale}return locale}


(function() {
    var addEvent = function(obj, type, fn) {
        if (obj.addEventListener)
            obj.addEventListener(type, fn, false);
        else if (obj.attachEvent) {
            obj["e" + type + fn] = fn;
            obj.attachEvent("on" + type, function() {
                obj["e" + type + fn]();
            });
        }
    };
    var onReady = function(loadEvent, waitForImages) {
        if (waitForImages) {
            return addEvent(window, 'load', loadEvent);
        }
        var init = function() {
            if (arguments.callee.done) return;
            arguments.callee.done = true;
            loadEvent.apply(document, arguments);
        };
        if (! +"\v1") {
            if (window.self == window.top) {
                (function() {
                    try {
                        document.documentElement.doScroll("left");
                    } catch (e) {
                        setTimeout(arguments.callee, 0);
                        return;
                    }
                    init();
                })();
            } else {
                document.attachEvent("onreadystatechange", function() {
                    if (document.readyState === "complete") {
                        document.detachEvent("onreadystatechange", arguments.callee);
                        init();
                    }
                });
            }
        } else {
            document.addEventListener("DOMContentLoaded", function() {
                document.removeEventListener("DOMContentLoaded", arguments.callee, false);
                init();
            }, false);
        }
        return true;
    }
    if (!window.onReady) {
        window["onReady"] = onReady;
    }

})();


function AJAX(url, callback, fail_callback) {
	var XMLHttpReq;
	function createXMLHttpRequest() {
		try {
			XMLHttpReq = new ActiveXObject("Msxml2.XMLHTTP");//IE高版本创建XMLHTTP
		}
		catch(E) {
			try {
				XMLHttpReq = new ActiveXObject("Microsoft.XMLHTTP");//IE低版本创建XMLHTTP
			}
			catch(E) {
				XMLHttpReq = new XMLHttpRequest();//兼容非IE浏览器，直接创建XMLHTTP对象
			}
		}

	}
	function sendAjaxRequest(url, callback, fail_callback) {
		createXMLHttpRequest();                                //创建XMLHttpRequest对象
		XMLHttpReq.open("post", url, true);
		var processResponse = function() {
			if (XMLHttpReq.readyState == 4) {
				if (XMLHttpReq.status == 200 || XMLHttpReq.status == 0) {
					if (!!XMLHttpReq.responseURL) {
						typeof callback === 'function' ? callback(XMLHttpReq.responseText) : null;
					}else{
						typeof fail_callback === 'function' ? fail_callback(404) : null;
					}
				}else{
					typeof fail_callback === 'function' ? fail_callback(XMLHttpReq.status) : null;
				}
			}
		}
		XMLHttpReq.onreadystatechange = processResponse; //指定响应函数
		try {
			XMLHttpReq.send(null);
		} catch (e) {
			throw new Error('未配置好实时预览模板！详情参见：http://pme.eexx.me/doku.php?id=ued:template#%E5%AE%9E%E6%97%B6%E9%A2%84%E8%A7%88');
		}
	}
	sendAjaxRequest(url, callback, fail_callback);
}

function objClone (myObj) {
	if(typeof(myObj) != 'object') return myObj;
	if(myObj == null) return myObj;
	if (myObj.length > 0) var myNewObj = new Array();
	else var myNewObj = new Object();
	for(var i in myObj)
		myNewObj[i] = objClone(myObj[i]);
	return myNewObj;
}

function parseIniData (data) {
	var regex = {
		section: /^\s*\[\s*([^\]]*)\s*\]\s*$/,
		param: /^\s*([\w\.\-\_\[\]]+)\s*=\s*(.*?)\s*$/,
		comment: /^\s*;.*$/

	};
	var value = {};
	var lines = data.split(/\r\n|\r|\n/);
	var section = null;
	lines.forEach(function(line) {
		if (regex.comment.test(line)) {
			return;

		} else if (regex.param.test(line)) {
			var match = line.match(regex.param);
			if (section) {
				value[section][match[1]] = match[2];

			} else {
				value[match[1]] = match[2];

			}

		} else if (regex.section.test(line)) {
			var match = line.match(regex.section);
			value[match[1]] = {};
			section = match[1];

		} else if (line.length == 0 && section) {
			section = null;

		};

	});
	return value;
}

function downloadFile(fileName, content){
	var aLink = document.createElement('a');
	var blob = new Blob([content]);
	var evt = document.createEvent("HTMLEvents");
	evt.initEvent("click", false, false);//initEvent 不加后两个参数在FF下会报错, 感谢 Barret Lee 的反馈
	aLink.download = fileName;
	aLink.href = URL.createObjectURL(blob);
	aLink.dispatchEvent(evt);
}

// eval scripts from file
function evalScriptFiles(element){
	element = element || document;
	var script_srcs = [];
	for (var scripts = element.getElementsByTagName("script"),i=0; i<scripts.length;) {
		if (scripts[i].getAttribute("src") && scripts[i].getAttribute("src").indexOf('preview.js') == -1 && scripts[i].dataset.jsmarty != 'true') {
			script_srcs.push(scripts[i].getAttribute("src"));
			scripts[i].parentNode.removeChild(scripts[i]);
		}else i++;
	}
	(function() {
		var i = 0;
		if (script_srcs.length <= 0) return false;
		!function(script_src) {
			var appendScript = arguments.callee;
			if (script_src && script_src.indexOf('preview.js') == -1) {
				var script = document.createElement("script");
				script.type = "text/javascript";
				script.src = script_src;
				script.dataset.jsmarty = 'true';
				script.onload = function() {
					if (!script_srcs[++i]) return false;
					appendScript(script_srcs[i]);
				};
				document.getElementsByTagName('head')[0].appendChild(script);
			}else{
				appendScript(script_srcs[++i]);
			}
		}(script_srcs[i]);
	})();
}

// eval scripts from text (from mootools)
function evalScripts(text){
	var script, scripts = [], srcScripts = [], scriptSrc;
	var regexp = /<script([^>]*)>([\s\S]*?)<\/script>/gi;
	while ((script = regexp.exec(text)))
		if (/src\s*=\s*"/.test(script[1])) srcScripts.push(script[2]);
		else scripts.push(script[2]);
	scripts = scripts.join('\n');

	if (scripts) (window.execScript) ? window.execScript(scripts) : window.setTimeout(scripts, 0);
}

// jSmarty init
jSmart.prototype.getTemplate = function(file) {
	var filename = file.substr(0, file.lastIndexOf('.')),
		jsonfile = filename + '.json';
	var getFileData = function(jsonfiledata) {
		try { var jsonfiledata = jsonfiledata ? eval('(' + jsonfiledata + ')') : {}; }
		catch (e) { throw new Error('【' + jsonfile + '】文件内容不符合JSON格式！\r\n详情参见：http://pme.eexx.me/doku.php?id=ued:template:json'); }
		saveConfig(filename.substr(filename.indexOf('/')+1), jsonfiledata);
		AJAX(file, function(filedata) {
			var _include = document.getElementById('jSmart-include-' + file),
				_includeParent = _include.parentNode;
			var newNode = document.createElement("div");
			newNode.innerHTML = filedata; 
			var includeNode = document.createElement("div");
			while (newNode.childNodes.length > 0) {
					includeNode.appendChild(newNode.childNodes[0]);
			}
			// jSmarty
			var tpl = new jSmart(includeNode.innerHTML);
			includeNode.innerHTML = tpl.fetch(PREVIEW_CONFIG);
			// 执行js
			evalScriptFiles(includeNode);
			// 执行script
			evalScripts(includeNode.innerHTML);
			// include进页面
			while (includeNode.childNodes.length > 0) {
				_includeParent.insertBefore(includeNode.childNodes[0], _include);
			}
			_includeParent.removeChild(_include);
		});

	};
	AJAX(jsonfile, getFileData, getFileData);
	return '<div id="jSmart-include-' + file + '"></div>';
}
jSmart.prototype.registerFilter('variable', function(s,a){
    if (typeof s === 'undefined') console.warn('Tips: 请检查html文件，有变量引用不存在！');
	return s;
});
// Smarty Plugins
jSmart.prototype.registerPlugin(
	'function', 
	'mapExt', 
	function (params, data) {
		params['scale_size'] = params['scale_size'] || 17;
		params['width'] = params['width'] || '80%';
		params['height'] = params['height'] || '200px';
		var s;
		s = '<div id="allmap" style="width: '+params['width']+';height: '+params['height']+'"></div>';
		s += '<script>';
		s += 'var map_js = document.createElement("script");\n\
			map_js.setAttribute("type", "text/javascript");\n\
			map_js.setAttribute("src", "http://api.map.baidu.com/getscript?v=2.0&ak=GylcTxXNQ3zkyCffjBYPHOb8&services=&t=20150514110922");\n\
			var headobj = document.getElementsByTagName("head")[0];headobj.appendChild(map_js);\n\
			map_js.onload = map_js.onreadystatechange = function() {\n\
			var map = new BMap.Map("allmap");\n\
			var point = new BMap.Point(118.1038860000,24.4892310000);\n\
			map.centerAndZoom(point,12);\n\
			var myGeo = new BMap.Geocoder();\n\
			map.enableScrollWheelZoom(true);';
			if ('address' in params) {
				s += 'myGeo.getPoint("'+params['address']+'", function(point){\n\
					if (point) {\n\
					  map.centerAndZoom(point,'+params['scale_size']+');\n\
					  map.addOverlay(new BMap.Marker(point));\n\
					}else{\n\
					  alert("您选择地址没有解析到结果!");\n\
					}\n\
					}, "厦门市");\n';
			}else{
				return '';
			}
		s += '};\n\
		  <\/script>';
		return s;
	}
);

jSmart.prototype.registerPlugin(
	'function', 
	'shareExt', 
	function(params, data){
		var s = '<div class="bdsharebuttonbox" data-tag="share_1">\n\
		  <a class="bds_mshare" data-cmd="mshare"></a>\n\
		  <a class="bds_qzone" data-cmd="qzone" href="#"></a>\n\
		  <a class="bds_tsina" data-cmd="tsina"></a>\n\
		  <a class="bds_baidu" data-cmd="baidu"></a>\n\
		  <a class="bds_renren" data-cmd="renren"></a>\n\
		  <a class="bds_tqq" data-cmd="tqq"></a>\n\
		  <a class="bds_more" data-cmd="more">更多</a>\n\
		  <a class="bds_count" data-cmd="count"></a>\n\
		</div>';
		// 显示类型
		params['style'] = params['style'] || "1";
		window._bd_share_config = {
		  common : {
			bdText : params['shareText'], 
			bdDesc : params['shareDesc'], 
			bdUrl : params['shareUrl'] || location.href,   
			bdPic : params['sharePic']
		  },
		  share : [{
			"bdSize" : params['viewSize'] || 16
		  }],
		  slide : [{     
			bdImg : 0,
			bdPos : "right",
			bdTop : 200
		  }],
		  image : [{
			viewType : 'list',
			viewPos : 'top',
			viewColor : 'black',
			viewSize : '16',
			viewList : ['qzone','tsina','huaban','tqq','renren']
		  }],
		  selectShare : [{
			"bdselectMiniList" : ['qzone','tqq','kaixin001','bdxc','tqf']
		  }]
		};
		params['style'] == "1" ? delete _bd_share_config.slide : params['style'] == "2" ? delete _bd_share_config.share : null;
		params['image'] ? null : delete _bd_share_config.image;
		with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];
		return s;
	}
);

function saveConfig(index, data) {
	if (typeof data !== 'object') return false;
	var slimming = [];
	for (var k in data) {
		var checkDataK = true;
		for (var dk in data[k])
			if (!/^(value|type|description|config)$/.test(dk)) checkDataK = false;
		if (!checkDataK || typeof data[k].value === 'undefined' || typeof data[k].type === 'undefined' || typeof data[k].description === 'undefined')
			throw new Error('json文件中每个变量的元素必须包含【value、type、description】元素，可选【config】\r\n详情参见：http://pme.eexx.me/doku.php?id=ued:template:json');
		if (typeof data[k].value !== 'undefined') {
			slimming[k] = data[k].value;
		}else{
			slimming[k] = data[k];
		}
		// PHP端数据填充与验证
		switch (data[k].type) {
			case 'text':
				if (typeof slimming[k] !== 'string') throw new Error('json文件中type为【text】格式的value值必须为【字符串】\r\n详情参见：http://pme.eexx.me/doku.php?id=ued:template:json#typetext');
				break;
			case 'textarea':
				if (typeof slimming[k] !== 'string') throw new Error('json文件中type为【textarea】格式的value值必须为【字符串】\r\n详情参见：http://pme.eexx.me/doku.php?id=ued:template:json#typetextarea');
				slimming[k] = slimming[k].replace(/\r\n/g, "<br />").replace(/\n/g, "<br />");
				break;
			case 'image':
				if (typeof slimming[k].title === 'undefined' || typeof slimming[k].image === 'undefined' || typeof slimming[k].link === 'undefined')
					throw new Error('json文件中type为【image】格式的value值必须包含【title、image、link】元素，可选【description】\r\n详情参见：http://pme.eexx.me/doku.php?id=ued:template:json#typeimage');
				if (typeof data[k].config !== 'object' || (typeof data[k].config.width !== 'number' && typeof data[k].config.height !== 'number')) {
					var msg = 'json文件中type为【image】格式应配置【config】的【width】【height】配置项\r\n详情参见：http://pme.eexx.me/doku.php?id=ued:template:json#typeimage';
					if (typeof data[k].config === 'object' && data[k].config.forcesize === true) {
						throw new Error(msg);
					}else{
						console.error('Error: ' + msg);
					}
				}
				break;
			case 'images':
				if (typeof slimming[k] !== 'object' || typeof slimming[k].length === 'undefined') throw new Error('json文件中type为【images】格式不正确！\r\n详情参见：http://pme.eexx.me/doku.php?id=ued:template:json#typeimages');
				for (var i=0; i<slimming[k].length; i++) {
					if (typeof slimming[k][i].title === 'undefined' || typeof slimming[k][i].image === 'undefined' || typeof slimming[k][i].link === 'undefined')
						throw new Error('json文件中type为【images】格式value值的每个子元素必须包含【title、image、link】元素，可选【description】\r\n详情参见：http://pme.eexx.me/doku.php?id=ued:template:json#typeimages');
				}
				if (typeof data[k].config !== 'object' || (typeof data[k].config.width !== 'number' && typeof data[k].config.height !== 'number')) {
					var msg = 'json文件中type为【images】格式应配置【config】的【width】【height】配置项\r\n详情参见：http://pme.eexx.me/doku.php?id=ued:template:json#typeimages';
					if (typeof data[k].config === 'object' && data[k].config.forcesize === true) {
						throw new Error(msg);
					}else{
						console.error('Error: ' + msg);
					}
				}
				break;
			case 'page':
				data[k].config = {
					filter: "page"
				};
			case 'list':
				slimming[k] = {
					name: '栏目B',
					en_name: 'Nav B',
					image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
					link: 'list-text.html',
					description: '这是栏目A的一段描述...',
					data: objClone(PREVIEW_DEMODATA.list),
					childmenu: [{
						name: '导航B1',
						en_name: 'Nav B1',
						link: 'list-imagetext.html',
						image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
						description: '这是栏目的一段描述...',
						childmenu: null
					}, {
						name: '导航B2',
						en_name: 'Nav B2',
						link: 'list-imagetext.html',
						image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
						description: '这是栏目的一段描述...',
						childmenu: null
					}, {
						name: '导航B3',
						en_name: 'Nav B3',
						link: 'list-imagetext.html',
						image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
						description: '这是栏目的一段描述...',
						childmenu: null
					}, {
						name: '导航B4',
						en_name: 'Nav B4',
						link: 'list-imagetext.html',
						image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
						description: '这是栏目的一段描述...',
						childmenu: null
					}, {
						name: '导航B5',
						en_name: 'Nav B5',
						link: 'list-imagetext.html',
						image: 'http://chanpin.xm12t.com.cn/images/cat_01.jpg',
						description: '这是栏目的一段描述...',
						childmenu: null
					}]
				};
				if (typeof data[k].config === 'object' && data[k].config.filter == 'page') {
					// 仅获取单页类型的栏目
					delete slimming[k].data;
					slimming[k].content = '&lt;p&gt;文章内容...&lt;/p&gt;&lt;p&gt;一大段文章内容...&lt;/p&gt;';
					for (var i=typeof listPageNavsKey==='number'?listNavsKey:0; i<PREVIEW_CONFIG.navs.length; i++) {
						if (PREVIEW_CONFIG.navs[i].type == 4) {
							slimming[k].name = PREVIEW_CONFIG.navs[i].name;
							slimming[k].en_name = PREVIEW_CONFIG.navs[i].en_name;
							slimming[k].link = PREVIEW_CONFIG.navs[i].link;
							slimming[k].image = PREVIEW_CONFIG.navs[i].image;
							slimming[k].description = PREVIEW_CONFIG.navs[i].description;
							listPageNavsKey = i+1;
							break;
						}
					}
				} else if (typeof data[k].config !== 'object' || typeof data[k].config.filter === 'undefined' || data[k].config.filter == 'list') {
					// 仅获取列表类型的栏目
					for (var i=typeof listNavsKey==='number'?listNavsKey:0; i<PREVIEW_CONFIG.navs.length; i++) {
						if (PREVIEW_CONFIG.navs[i].type == 1 || PREVIEW_CONFIG.navs[i].type == 2 || PREVIEW_CONFIG.navs[i].type == 3) {
							slimming[k].name = PREVIEW_CONFIG.navs[i].name;
							slimming[k].en_name = PREVIEW_CONFIG.navs[i].en_name;
							slimming[k].link = PREVIEW_CONFIG.navs[i].link;
							slimming[k].image = PREVIEW_CONFIG.navs[i].image;
							slimming[k].description = PREVIEW_CONFIG.navs[i].description;
							listNavsKey = i+1;
							break;
						}
					}
					if (typeof data[k].config === 'object') {
						if (typeof data[k].config.limit === 'number') {
							slimming[k].data.splice(data[k].config.limit);
						}
						if (data[k].config.star_only === true) {
							for (var i=0; i<slimming[k].data.length; i++) {
								slimming[k].data[i].title = '★' + slimming[k].data[i].title;
							}
						}
					}
				}
				// 获取子栏目文章
				if (typeof data[k].config === 'object' && data[k].config.showchilddata) {
					for (var i = 0; i < slimming[k].childmenu.length; i++) {
						slimming[k].childmenu[i].data = objClone(PREVIEW_DEMODATA.list);
					}
				}
				break;
			case 'navs':
				if (TEMPLATE_CONFIG.Config.type == 1) throw new Error('PC模板的json文件中没有type为【navs】的变量！\r\n如果你现在制作的是手机模板，请修改config.ini文件对应参数。详情参见：http://pme.eexx.me/doku.php?id=ued:template:config#config_%E6%A8%A1%E6%9D%BF%E9%85%8D%E7%BD%AE%E9%83%A8%E5%88%86');
				if (typeof slimming[k] !== 'object' || typeof slimming[k].length === 'undefined') throw new Error('json文件中type为【navs】格式不正确！\r\n详情参见：http://pme.eexx.me/doku.php?id=ued:template:mindex#%E5%BA%95%E9%83%A8%E5%AF%BC%E8%88%AA%E5%AE%9A%E4%B9%89%E6%96%B9%E6%B3%95');
				for (var i=0; i<slimming[k].length; i++) {
					if (typeof slimming[k][i].name === 'undefined' ||
						typeof slimming[k][i].image === 'undefined' ||
						typeof slimming[k][i].data === 'undefined' ||
						typeof slimming[k][i].type === 'undefined' ||
						typeof slimming[k][i].enable === 'undefined'
					) throw new Error('json文件中type为【navs】格式value值的每个子元素必须包【name、image、data、type、enable】元素，可选【childmenu】\r\n详情参见：http://pme.eexx.me/doku.php?id=ued:template:mindex#%E5%BA%95%E9%83%A8%E5%AF%BC%E8%88%AA%E5%AE%9A%E4%B9%89%E6%96%B9%E6%B3%95');
					if (!/^(tel|sms|im|link|share)$/.test(slimming[k][i].type))
						throw new Error('json文件中type为【navs】格式value值的子元素的【type】值只能为【tel、sms、im、link、share】其中之一\r\n详情参见：http://pme.eexx.me/doku.php?id=ued:template:mindex#%E5%BA%95%E9%83%A8%E5%AF%BC%E8%88%AA%E5%AE%9A%E4%B9%89%E6%96%B9%E6%B3%95');
					if (!slimming[k][i].enable) {
						slimming[k].splice(i, 1);
					}
					switch (slimming[k][i].type) {
						case 'tel':
							slimming[k][i].link = 'tel://' + slimming[k][i].data;
							break;
						case 'sms':
							slimming[k][i].link = 'sms://' + slimming[k][i].data;
							break;
						case 'share':
						case 'im':
							slimming[k][i].link = 'javascript:void(0);';
							break;
						case 'link':
							if (slimming[k][i].childmenu && slimming[k][i].childmenu.length>0) {
								slimming[k][i].link = 'javascript:void(0);';
								for (var j=0; j<slimming[k][i].childmenu.length; j++) {
									if (!slimming[k][i].childmenu[j].enable) {
										slimming[k][i].childmenu.splice(j, 1);
									}
									slimming[k][i].childmenu[j].link = slimming[k][i].childmenu[j].data;
								}
							}else{
								slimming[k][i].link = slimming[k][i].data;
							}
							break;
						default:
							slimming[k][i].link = slimming[k][i].data;
					}
				}
				break;
		}
	}
	PREVIEW_CONFIG[index.replace('-','_')] = slimming;
	return slimming;
}

onReady(function() {
	console.clear();
	// Load config.ini
	AJAX('config.ini', function(config) {
		TEMPLATE_CONFIG = parseIniData(config);
		// Category
		if (typeof TEMPLATE_CONFIG.Config.Category === 'string') {
			changeConfigSource(TEMPLATE_CONFIG.Config.Category);
		}
		// Type
		if (typeof TEMPLATE_CONFIG.Config.Type === 'string' && TEMPLATE_CONFIG.Config.Type.toUpperCase().indexOf('PC') == -1) {
			TEMPLATE_CONFIG.Config.type = 2;
		}else{
			TEMPLATE_CONFIG.Config.type = 1;
		}
		// QuickBar
		if (TEMPLATE_CONFIG.Config.type == 2 && TEMPLATE_CONFIG.Config.QuickBar != 'custom') {
			var tmpConfigQuickbar = (TEMPLATE_CONFIG.Config.QuickBar || '').split('|');
			var tmpStyleConfigQuickbar = tmpConfigQuickbar[0].split(',');
			window.previewJSQuickbar = {
				enable: true,
				style: {
					barColor : tmpStyleConfigQuickbar[0],
					navtopColor   : tmpStyleConfigQuickbar[1],
					textColor   : tmpStyleConfigQuickbar[2],
					iconColor   : tmpStyleConfigQuickbar[3]
				}
			};
			if (typeof tmpConfigQuickbar[1] !== 'undefined') {
				var tmpModuleConfigQuickbar = tmpConfigQuickbar[1].split(',');
				if (/^#[\w-]+$/.test(tmpModuleConfigQuickbar)) {
					// Module from DOM
					previewJSQuickbar.module = tmpModuleConfigQuickbar[0];
				}else{
					previewJSQuickbar.module = {};
					for (var i = tmpModuleConfigQuickbar.length - 1; i >= 0; i--) {
						switch(tmpModuleConfigQuickbar[i]){
							case 'tel':
								previewJSQuickbar.module.tel = PREVIEW_CONFIG.contact.telephone;
								break;
						}
					};
				}
			}
			//PREVIEW_CONFIG.footscript += '<script type="text/javascript" src="http://chanpin.xm12t.com.cn/js/quickbar.js"></script>';
		}else{
			window.previewJSQuickbar = {enable: false};
		}
		// Debug
		if (typeof TEMPLATE_CONFIG.Debug === 'object') {
			var debugJSON;
			for (var k in TEMPLATE_CONFIG.Debug) {
				try { debugJSON = eval('(' + TEMPLATE_CONFIG.Debug[k] + ')'); } catch (e) { debugJSON = false; }
				if (/^[_a-zA-Z]+[A-Za-z0-9_]*$/.test(k)) {
					PREVIEW_CONFIG[k] = typeof debugJSON === 'object' ? debugJSON : TEMPLATE_CONFIG.Debug[k];
				}else{
					try {
						typeof debugJSON === 'object' ?
							eval('PREVIEW_CONFIG.'+k+' = (' + TEMPLATE_CONFIG.Debug[k] + ');') :
							eval('PREVIEW_CONFIG.'+k+' = TEMPLATE_CONFIG.Debug[k];');
					} catch (e) {}
				}
			}
		}
		
		// Load !database.json
		AJAX('!database.json', function(databaseData) {
			try { databaseData = eval('(' + databaseData + ')'); PREVIEW_CONFIG = databaseData; }
			catch (e) { console.error('【!database.json】文件内容不符合JSON格式！自定义虚拟数据库未成功启用！！\r\n详情参见：http://pme.eexx.me/doku.php?id=ued:template#%E5%A6%82%E4%BD%95%E4%BF%AE%E6%94%B9%E7%A4%BA%E4%BE%8B%E6%95%B0%E6%8D%AE'); }
			dealData();
		}, dealData);
		
		// Deal Data
		function dealData() {
			// Modify PREVIEW_CONFIG
			var paramStr = location.href.replace(location.hash, "").substr(location.href.lastIndexOf("?")+1);
			if (paramStr.indexOf('database') != -1) {
				!function() {
					PREVIEW_CONFIG_edit = objClone(PREVIEW_CONFIG);
					var jsJSON = document.createElement('script');
					jsJSON.setAttribute('type', 'text/javascript');
					jsJSON.setAttribute('src', 'http://chanpin.xm12t.com.cn/js/json2.js');
					jsJSON.onload = jsJSON.onreadystatechange = function() {
						typeof jQuery === 'undefined' ? (function() {
							var jsJQuery = document.createElement('script');
							jsJQuery.setAttribute('type', 'text/javascript');
							jsJQuery.setAttribute('src', 'http://libs.baidu.com/jquery/1.9.0/jquery.js');
							jsJQuery.onload = jsJQuery.onreadystatechange = jsJQueryOnload;
							(document.body || document.getElementsByTagName('body')[0] || document.head || document.getElementsByTagName('head')[0] || document.documentElement).appendChild(jsJQuery);
						})() : jsJQueryOnload();
						function jsJQueryOnload() {
							var jsJsoneditor = document.createElement('script');
							jsJsoneditor.setAttribute('type', 'text/javascript');
							jsJsoneditor.setAttribute('src', 'http://chanpin.xm12t.com.cn/js/jquery.jsoneditor.min.js');
							jsJsoneditor.onload = jsJsoneditor.onreadystatechange = function() {
								// Modify PREVIEW_CONFIG start
								var _mask = $('<div/>').css({
									'position':'fixed',
									'left':0,'right':0,'top':0,'bottom':0,
									'background-color':'#000',
									'opacity':0.8,'z-index':999
								}).appendTo('body');
								var _editorContent = $('<div id="editor-content"/>');
								_editorContent.css({
									'position':'absolute','left':100,'right':100,'top':50,
									'min-height':$(window).height(),
									'padding':'60px 20px',
									'background-color':'#FFF',
									'border-radius':'10px',
									'z-index':1000
								}).appendTo('body').append('\
									<p style="margin:0 0 20px 30px;color:red;font-size:16px;font-weight:bold">修改完成后，点击右上角<span id="legend" style="margin-left:0"><span class="array">保存</span></span>按钮，将数据文件放置模板根目录即可！</p>\n\
									<div id="legend">\
										<span id="expander">展开全部数据</span>\
										<em>键值颜色说明：</em>\
										<span class="array">array</span>\
										<span class="object">object</span>\
										<span class="string">string</span>\
										<span class="number">number</span>\
										<span class="boolean">boolean</span>\
										<span class="null">null</span>\
									</div>\n\
									<div id="json-editor" class="json-editor"/>\n\
									<p style="padding:10px 0;margin-left:30px"><label for="json-show">或者你也可以在这儿手动编辑json格式数据:</label></p>\n\
								').append($('<textarea id="json-show"></textarea>').css({
									'width':'65%','min-height':150,
									'margin-left':30,
								})).append($('<a id="json-save" class="button blue glossy" data-icon="✔" href="javascript:;">保存</a>').css({
									'position':'absolute','right':100,'top':8,
									'font-family':'Microsoft Yahei','font-weight':700,
									'letter-spacing':'0.2em'
								}).click(function() {
									downloadFile('!database.json', JSON.stringify(PREVIEW_CONFIG_edit, null, "\t"));
									alert('将下载的!database.json保存至模板根目录，即可生效！');
									location.href = 'index.html';
								})).append($('<a id="json-close" class="button oval glass icon" data-icon="✘" href="javascript:;"></a>').css({
									'position':'absolute','right':10,'top':10
								}).click(function() {
									_editorContent.fadeOut();
									_mask.fadeOut();
									window.history.replaceState(null, null, "index.html");
								}));
								var updateJSON = function(json) {
									PREVIEW_CONFIG_edit = json;
									$('#json-show').val(JSON.stringify(PREVIEW_CONFIG_edit, null, "\t"));
								};
								$('#json-editor').jsonEditor(PREVIEW_CONFIG_edit, {change: updateJSON});
								$('#json-show').val(JSON.stringify(PREVIEW_CONFIG_edit, null, "\t")).change(function() {
									var val = $(this).val();
									if (val) {
										try { PREVIEW_CONFIG_edit = JSON.parse(val); }
										catch (e) { alert('json格式不正确！' + e); }
									}
									$('#json-editor').jsonEditor(PREVIEW_CONFIG_edit, {change: updateJSON});
								});
								$('#expander').click(function() {
									var editor = $('#json-editor');
									editor.toggleClass('expanded');
									$(this).text(editor.hasClass('expanded') ? '收起数据' : '展开全部数据');
								});
							};
							(document.body || document.getElementsByTagName('body')[0] || document.head || document.getElementsByTagName('head')[0] || document.documentElement).appendChild(jsJsoneditor);
							var cssJsoneditor = document.createElement('link');
							cssJsoneditor.setAttribute('type', 'text/css');
							cssJsoneditor.setAttribute('rev', 'stylesheet');
							cssJsoneditor.setAttribute('rel', 'stylesheet');
							cssJsoneditor.setAttribute('href', 'http://chanpin.xm12t.com.cn/css/jsoneditor.css');
							(document.head || document.getElementsByTagName('head')[0]).appendChild(cssJsoneditor);
							var cssButtons = document.createElement('link');
							cssButtons.setAttribute('type', 'text/css');
							cssButtons.setAttribute('rev', 'stylesheet');
							cssButtons.setAttribute('rel', 'stylesheet');
							cssButtons.setAttribute('href', 'http://chanpin.xm12t.com.cn/css/buttons.css');
							(document.head || document.getElementsByTagName('head')[0]).appendChild(cssButtons);
						}
					};
					(document.body || document.getElementsByTagName('body')[0] || document.head || document.getElementsByTagName('head')[0] || document.documentElement).appendChild(jsJSON);
				}();
			}
			
			// Make data logical
			makeDataLogical();

			for (var previewJS = document.querySelectorAll("script[src*='preview.js']"), i = previewJS.length; i--;) {
				//var attr_jsonfile = previewJS[i].getAttribute("data-jsonfile");
				var DEBUG = previewJS[i].getAttribute("debug")!==null ? true : false;
			}
			//var jsonfile = attr_jsonfile ? attr_jsonfile :'index.json';
			if (location.href.replace(location.hash, "").lastIndexOf(".") != -1) {
				var filename = location.href.replace(location.hash, "").substring(location.href.lastIndexOf("/")+1, location.href.replace(location.hash, "").lastIndexOf("."));
				if (typeof TEMPLATE_CONFIG.Config.Type === 'string' && TEMPLATE_CONFIG.Config.Type.toUpperCase().indexOf('PC') == -1) {
					TEMPLATE_CONFIG.Config.type = 2;
				}else{
					TEMPLATE_CONFIG.Config.type = 1;
					delete PREVIEW_CONFIG.mIndexCats;
				}
			}else{	// URI只访问到目录名(载入默认HTML文件)
				filename = 'index';
			}
			var jsonfile = filename + '.json';
			
			// Load global
			AJAX('global.json', function(globalData) {
				try { globalData = eval('(' + globalData + ')'); }
				catch (e) { throw new Error('【global.json】文件内容不符合JSON格式！\r\n详情参见：http://pme.eexx.me/doku.php?id=ued:template:json'); }
				saveConfig('global', globalData);
				// Load own jsonfile
				AJAX(jsonfile, loadOwnJson, loadOwnJson);
			}, function(status) {
				if (TEMPLATE_CONFIG.Config.type == 1) {
					// Load own jsonfile
					AJAX(jsonfile, loadOwnJson, loadOwnJson);
				} else if (status == 404 && TEMPLATE_CONFIG.Config.type == 2)
					throw new Error('【global.json】文件不存在！文件格式说明详见：http://pme.eexx.me/doku.php?id=ued:template:json');
			});
			
			function loadOwnJson(jsonfiledata) {
				if (TEMPLATE_CONFIG.Config.type == 1) {
					try { jsonfiledata = eval('(' + jsonfiledata + ')'); }
					catch (e) { throw new Error('【' + jsonfile + '】文件内容不符合JSON格式！\r\n详情参见：http://pme.eexx.me/doku.php?id=ued:template:json'); }
					saveConfig(filename, jsonfiledata);
				}
				
				// 校验模板格式
				if (!DEBUG) {
					if (typeof document.querySelectorAll !== 'undefined') {
						for (var links = document.querySelectorAll("link[href]:not([href^='{$site_url}'])"), i = links.length; i--;) {
							if (!/^http[s]?:\/\//.test(links[i].getAttribute("href")) && !/^\{\$.*\}$/.test(links[i].getAttribute("href"))) {
								throw new Error('所有的css引用link都必须加入路径变量【{$site_url}】\r\n详情参见：http://pme.eexx.me/doku.php?id=ued:template#%E6%A8%A1%E6%9D%BFjs_css%E5%BC%95%E7%94%A8');
							}
						}
						for (var scripts = document.querySelectorAll("script[src]:not([src^='{$site_url}'])"), i = scripts.length; i--;) {
							if (scripts[i].getAttribute("src").indexOf('preview.js') != -1 && scripts[i].getAttribute("src") != 'http://chanpin.xm12t.com.cn/js/preview.js') {
							//	throw new Error('【previewJS】请引用服务端文件：http://chanpin.xm12t.com.cn/js/preview.js');
							} else if (!/^http[s]?:\/\//.test(scripts[i].getAttribute("src")) && !/^\{\$.*\}$/.test(scripts[i].getAttribute("src"))) {
								console.log(scripts[i].getAttribute("src"));
								throw new Error('所有的js引用script都必须加入路径变量【{$site_url}】\r\n详情参见：http://pme.eexx.me/doku.php?id=ued:template#%E6%A8%A1%E6%9D%BFjs_css%E5%BC%95%E7%94%A8');
							}
						}
						for (var imgs = document.querySelectorAll("img[src]:not([src^='{$site_url}'])"), i = imgs.length; i--;) {
							if (!/^http[s]?:\/\//.test(imgs[i].getAttribute("src")) && !/^\{\$.*\}$/.test(imgs[i].getAttribute("src"))) {
								throw new Error('所有的img标签引用“本地”图片src都必须加入路径变量【{$site_url}】\r\n详情参见：http://pme.eexx.me/doku.php?id=ued:template#%E6%A8%A1%E6%9D%BFjs_css%E5%BC%95%E7%94%A8');
							}
						}
					}
					if (document.head.innerHTML.indexOf('{$title}') == -1) throw new Error('所有页面的head内必须加入【{$title}】\r\n详情参见：http://pme.eexx.me/doku.php?id=ued:template:index#title_%E9%A1%B5%E9%9D%A2%E6%A0%87%E9%A2%98');
					if (document.head.innerHTML.indexOf('{$keywords}') == -1) throw new Error('所有页面的head内必须加入【{$keywords}】\r\n详情参见：http://pme.eexx.me/doku.php?id=ued:template:index#keywords_%E9%A1%B5%E9%9D%A2%E5%85%B3%E9%94%AE%E8%AF%8D');
					if (document.head.innerHTML.indexOf('{$description}') == -1) throw new Error('所有页面的head内必须加入【{$description}】\r\n详情参见：http://pme.eexx.me/doku.php?id=ued:template:index#description_%E9%A1%B5%E9%9D%A2%E6%8F%8F%E8%BF%B0');
					if (filename == 'index') {
						if (!/^{\$headscript}/.test(document.body.innerHTML)) {
							throw new Error('index.html的head最后必须加入【{$headscript}】\r\n详情参见：http://pme.eexx.me/doku.php?id=ued:template:index#headscript_%E5%A4%B4%E9%83%A8%E8%84%9A%E6%9C%AC');
						}
						if (document.head.innerHTML.indexOf('{$site_another_url}') == -1) throw new Error('index.html的head顶端必须加入【{$site_another_url}】判断访问设备跳转\r\n详情参见：http://pme.eexx.me/doku.php?id=ued:template:index#site_another_url_%E7%BD%91%E7%AB%99%E5%8F%A6%E4%B8%80%E5%9F%9F%E5%90%8D%E5%9C%B0%E5%9D%80');
					}else{
						if (/{\$headscript}/.test(document.head.innerHTML) || /{\$headscript}/.test(document.body.innerHTML)) {
							throw new Error('首页外其他页面无需加入【{$headscript}】\r\n详情参见：http://pme.eexx.me/doku.php?id=ued:template:index#headscript_%E5%A4%B4%E9%83%A8%E8%84%9A%E6%9C%AC');
						}
					}
					// 延迟校验模板格式
					setTimeout(function() {
						if (document.body.innerHTML.indexOf('<!-- 这里将会输出底部脚本代码 -->') == -1) {
							throw new Error('所有页面的最后（可以在_footer.html中）必须加入【{$footscript}】\r\n详情参见：http://pme.eexx.me/doku.php?id=ued:template:footer#footscript_%E5%BA%95%E9%83%A8%E8%84%9A%E6%9C%AC');
						}
						if (document.body.innerHTML.indexOf('copyright 2014-2015') == -1) {
							throw new Error('所有页面的最后（可以在_footer.html中）必须加入【{$footprint}】\r\n详情参见：http://pme.eexx.me/doku.php?id=ued:template:footer#footprint_%E5%BA%95%E9%83%A8%E7%89%88%E6%9D%83');
						}
					}, 3000);
				}
				
				// jSmarty
				console.log(objClone(PREVIEW_CONFIG));
				var tpl = new jSmart(document.getElementsByTagName('html')[0].innerHTML);
				document.getElementsByTagName('html')[0].innerHTML = tpl.fetch(PREVIEW_CONFIG);
				
				// 执行js
				evalScriptFiles();
				// 执行script
				evalScripts(document.getElementsByTagName('html')[0].innerHTML);
			}
		}
	}, function(status) {
		if (status == 404)
			throw new Error('【config.ini】文件不存在！文件格式说明详见：http://pme.eexx.me/doku.php?id=ued:template:config');
	});
});