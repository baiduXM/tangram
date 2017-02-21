<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


/**
 * 模块数据模型
 *
 * @author 12t
 */
class Message extends Model{
    protected $table="message";
    public  $timestamps=false;
}
