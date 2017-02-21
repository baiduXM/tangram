<?php
/**
 * 用户数据模型
 *
 * @author 小陈
 */
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Customer extends Model {
    protected $table="customer";
    public function init(){
//        DB::statement('Create table up_customer{'
//                . 'id int,'
//                . 'name varchar(50),'
//                . 'email varchar(40),'
//                . 'password varchar(60),'
//                . 'password_temp varchar(40),'
//                . 'remember_token varchar(100),'
//                . 'weburl varchar(255),'
//                . '}');
//        ALTER TABLE `up_article` ADD `12222222` INT(10) NOT NULL COMMENT '阿阿斯顿' ;
//        ALTER TABLE `up_article` ADD `adsdf` VARCHAR(50) CHARACTER SET armscii8 COLLATE armscii8_general_ci NULL DEFAULT NULL COMMENT '水电费' AFTER `cus_id`, ADD FULLTEXT (`adsdf`) ;
//            foreach($database['fields'] as $val){
//                $str="ALTER TABLE {$database['table']} ADD {$val['name']} {$val['type']}";
//                if($val['length']!=''){
//                    $str.="({$val['length']}) ";
//                }
//                if($val['cannull']){
//                    $str.=" NULL ";
//                }else{
//                    $str.=" NOT NULL ";
//                }
//                if($val['default']!=''){
//                    $str.=" DEFAULT {$val['default']} ";
//                }
//                if($val['auto_increment']){
//                    $str.=" AUTO_INCREMENT ";
//                }
//                if($val['comment']!=''){
//                    $str.=" COMMENT '{$val['comment']}' ";
//                }
////                if($val['auto_increment']&&$val['index']!='primary'){
////                    $str.=" AUTO_INCREMENT ";
////                }
//                if($val['index']!=''){
//                    $str.=",ADD {$val['index']}({$val['name']}) ";
//                }
//            }
//        $database=array(
//            'fields'=>array(
//                array(
//                    'name'=>'id',
//                    'type'=>'int',
//                    'length'=>'',
//                    'default'=>'',
//                    'cannull'=>0,
//                    'index'=>'',
//                    'auto_increment'=>1,
//                    'comment'=>'',
//                    ),
//                array(
//                    'name'=>'name',
//                    'type'=>'varchar',
//                    'length'=>'50',
//                    ),
//                array(
//                    'name'=>'email',
//                    'type'=>'varchar',
//                    'length'=>'40',
//                    ),
//                array(
//                    'name'=>'password',
//                    'type'=>'varchar',
//                    'length'=>'60',
//                    ),
//                array(
//                    'name'=>'password_temp',
//                    'type'=>'varchar',
//                    'length'=>'40',
//                    ),
//                array(
//                    'name'=>'remember_token',
//                    'type'=>'varchar',
//                    'length'=>'100',
//                    )
//                ),
//            'table'=>'up_customer',
//            'sql'=>'ALTER TABLE up_customer DELETE PRIMARY KEY
//                    ALTER TABLE up_customer ADD PRIMARY KEY (id);
//                    CREATE INDEX customer_email ON up_customer (email);'
//            );
      
    }
    public function getInfo(){
//        $db=new DB();
//        var_dump($db->database);
//        exit();
        $result=DB::select("select COLUMN_NAME from information_schema.columns WHERE TABLE_NAME='up_{$this->table}'&&TABLE_SCHEMA='kf'");
        return $result;
    }
}
