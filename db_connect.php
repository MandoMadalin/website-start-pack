<?
$db_debug = 1;

$settings = array(
	'host'=> 'localhost',
	'port'=>'',
	'charset'=>'UTF8',
	'dbname'=> '',
	'user'=> '',
	'pass'=> ''
);

$emulate_prepares_below_version = '5.1.17';
$dsndefaults = array_fill_keys(array('host', 'port',  'dbname', 'charset'), null);
$dsnarr = array_intersect_key($settings, $dsndefaults);
$dsnarr += $dsndefaults;
//print_r($dsnarr);
// connection options I like
$options = array(
   //PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
   PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
);
// connection charset handling for old php versions
if ($dsnarr['charset'] and version_compare(PHP_VERSION, '5.3.6', '<')) {
    $options[PDO::MYSQL_ATTR_INIT_COMMAND] = 'SET NAMES '.$dsnarr['charset'];
}
$dsnpairs = array();
foreach ($dsnarr as $k => $v) {
    if ($v===null) continue;
    $dsnpairs[] = "{$k}={$v}";
}
$dsn = 'mysql:'.implode(';', $dsnpairs);
try {
	$db = new PDO($dsn, $settings['user'], $settings['pass'], $options);
	//$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	if($db_debug == 1){ $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); }
} catch(PDOException $e) {
	$err_db = 'Conexiunea cu baza de date nu a reusit, va rugam reveniti mai tarziu!';
	if($db_debug == 1){$err_db .= '<br>ERROR: ' . $e->getMessage();}
}

if(isset($err_db)){
	echo $err_db;
	exit;
}



function isMobileDevice() {
    return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
}
?>