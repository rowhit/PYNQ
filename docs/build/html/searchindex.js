Search.setIndex({envversion:48,filenames:["10_libraries_and_overlays","11_verification","12_modules","13_faqs","14_glossary","15_references","16_appendix","1_pynq","2_getting_started","3_jupyter_notebook","4_programming_in_python","5_programming_onboard_peripherals","6_pmodio_overlay","6a_arduino_overlay","7_audio_video_overlay","8_iop_code","9_creating_overlays","index","pynq","pynq.audio","pynq.board","pynq.pmods","pynq.trace_buffer","pynq.video","quick_start"],objects:{"":{pynq:[18,0,0,"-"]},"pynq.board":{"switch":[20,0,0,"-"],button:[20,0,0,"-"],led:[20,0,0,"-"]},"pynq.board.button":{Button:[20,1,1,""]},"pynq.board.button.Button":{index:[20,2,1,""],read:[20,3,1,""]},"pynq.board.led":{LED:[20,1,1,""]},"pynq.board.led.LED":{index:[20,2,1,""],off:[20,3,1,""],on:[20,3,1,""],read:[20,3,1,""],toggle:[20,3,1,""],write:[20,3,1,""]},"pynq.board.switch":{Switch:[20,1,1,""]},"pynq.board.switch.Switch":{index:[20,2,1,""],read:[20,3,1,""]},"pynq.drivers":{audio:[19,0,0,"-"],trace_buffer:[22,0,0,"-"],video:[23,0,0,"-"]},"pynq.drivers.audio":{Audio:[19,1,1,""],Headphone:[19,1,1,""],LineIn:[19,1,1,""]},"pynq.drivers.audio.Audio":{"_audio_ctrl":[19,2,1,""]},"pynq.drivers.audio.Headphone":{controller:[19,2,1,""]},"pynq.drivers.audio.LineIn":{controller:[19,2,1,""]},"pynq.drivers.trace_buffer":{Trace_Buffer:[22,1,1,""]},"pynq.drivers.trace_buffer.Trace_Buffer":{adapter:[22,2,1,""],csv2sr:[22,3,1,""],data:[22,2,1,""],decode:[22,3,1,""],display:[22,3,1,""],dma:[22,2,1,""],parse:[22,3,1,""],probes:[22,2,1,""],protocol:[22,2,1,""],samplerate:[22,2,1,""],set_metadata:[22,3,1,""],show:[22,3,1,""],sr2csv:[22,3,1,""],start:[22,3,1,""],stop:[22,3,1,""],trace_csv:[22,2,1,""],trace_pd:[22,2,1,""],trace_sr:[22,2,1,""]},"pynq.drivers.video":{Frame:[23,1,1,""],HDMI:[23,1,1,""],VGA:[23,1,1,""]},"pynq.drivers.video.Frame":{frame:[23,2,1,""],height:[23,2,1,""],save_as_jpeg:[23,3,1,""],save_raw_as_jpeg:[23,4,1,""],width:[23,2,1,""]},"pynq.drivers.video.HDMI":{direction:[23,2,1,""],frame:[23,2,1,""],frame_buffer:[23,2,1,""],frame_height:[23,2,1,""],frame_index:[23,2,1,""],frame_index_next:[23,2,1,""],frame_raw:[23,2,1,""],frame_width:[23,2,1,""],mode:[23,2,1,""],start:[23,3,1,""],state:[23,2,1,""],stop:[23,2,1,""]},"pynq.drivers.video.VGA":{direction:[23,2,1,""],frame:[23,2,1,""],frame_buffer:[23,2,1,""],frame_height:[23,2,1,""],frame_index:[23,2,1,""],frame_index_next:[23,2,1,""],frame_raw:[23,2,1,""],frame_width:[23,2,1,""],mode:[23,2,1,""],start:[23,2,1,""],state:[23,2,1,""],stop:[23,2,1,""]},"pynq.gpio":{GPIO:[18,1,1,""]},"pynq.gpio.GPIO":{direction:[18,2,1,""],get_gpio_base:[18,4,1,""],get_gpio_pin:[18,4,1,""],index:[18,2,1,""],path:[18,2,1,""],read:[18,3,1,""],write:[18,3,1,""]},"pynq.iop":{devmode:[21,0,0,"-"],grove_adc:[21,0,0,"-"],grove_buzzer:[21,0,0,"-"],grove_imu:[21,0,0,"-"],grove_ledbar:[21,0,0,"-"],grove_oled:[21,0,0,"-"],grove_pir:[21,0,0,"-"],pmod_adc:[21,0,0,"-"],pmod_als:[21,0,0,"-"],pmod_cable:[21,0,0,"-"],pmod_const:[21,0,0,"-"],pmod_dac:[21,0,0,"-"],pmod_dpot:[21,0,0,"-"],pmod_iic:[21,0,0,"-"],pmod_io:[21,0,0,"-"],pmod_led8:[21,0,0,"-"],pmod_oled:[21,0,0,"-"],pmod_tmp2:[21,0,0,"-"]},"pynq.iop.devmode":{DevMode:[21,1,1,""]},"pynq.iop.devmode.DevMode":{get_cmd_word:[21,3,1,""],get_switch_config:[21,3,1,""],iop:[21,2,1,""],iop_switch_config:[21,2,1,""],is_cmd_mailbox_idle:[21,3,1,""],load_switch_config:[21,3,1,""],mmio:[21,2,1,""],read_cmd:[21,3,1,""],start:[21,3,1,""],status:[21,3,1,""],stop:[21,3,1,""],write_cmd:[21,3,1,""]},"pynq.iop.grove_adc":{Grove_ADC:[21,1,1,""]},"pynq.iop.grove_adc.Grove_ADC":{get_log:[21,3,1,""],get_log_raw:[21,3,1,""],iop:[21,2,1,""],log_interval_ms:[21,2,1,""],log_running:[21,2,1,""],mmio:[21,2,1,""],read:[21,3,1,""],read_raw:[21,3,1,""],reset:[21,3,1,""],set_log_interval_ms:[21,3,1,""],start_log:[21,3,1,""],start_log_raw:[21,3,1,""],stop_log:[21,3,1,""],stop_log_raw:[21,3,1,""]},"pynq.iop.grove_buzzer":{Grove_Buzzer:[21,1,1,""]},"pynq.iop.grove_buzzer.Grove_Buzzer":{iop:[21,2,1,""],log_interval_ms:[21,2,1,""],mmio:[21,2,1,""],play_melody:[21,3,1,""],play_tone:[21,3,1,""]},"pynq.iop.grove_imu":{Grove_IMU:[21,1,1,""]},"pynq.iop.grove_imu.Grove_IMU":{get_accl:[21,3,1,""],get_altitude:[21,3,1,""],get_atm:[21,3,1,""],get_compass:[21,3,1,""],get_gyro:[21,3,1,""],get_heading:[21,3,1,""],get_pressure:[21,3,1,""],get_temperature:[21,3,1,""],get_tiltheading:[21,3,1,""],iop:[21,2,1,""],mmio:[21,2,1,""],reset:[21,3,1,""]},"pynq.iop.grove_ledbar":{Grove_LEDbar:[21,1,1,""]},"pynq.iop.grove_ledbar.Grove_LEDbar":{iop:[21,2,1,""],mmio:[21,2,1,""],read:[21,3,1,""],reset:[21,3,1,""],write_binary:[21,3,1,""],write_brightness:[21,3,1,""],write_level:[21,3,1,""]},"pynq.iop.grove_oled":{Grove_OLED:[21,1,1,""]},"pynq.iop.grove_oled.Grove_OLED":{clear:[21,3,1,""],iop:[21,2,1,""],mmio:[21,2,1,""],set_contrast:[21,3,1,""],set_horizontal_mode:[21,3,1,""],set_inverse_mode:[21,3,1,""],set_normal_mode:[21,3,1,""],set_page_mode:[21,3,1,""],set_position:[21,3,1,""],write:[21,3,1,""]},"pynq.iop.grove_pir":{Grove_PIR:[21,1,1,""]},"pynq.iop.grove_pir.Grove_PIR":{index:[21,2,1,""],iop:[21,2,1,""],read:[21,3,1,""]},"pynq.iop.pmod_adc":{PMOD_ADC:[21,1,1,""]},"pynq.iop.pmod_adc.PMOD_ADC":{get_log:[21,3,1,""],get_log_raw:[21,3,1,""],iop:[21,2,1,""],log_running:[21,2,1,""],mmio:[21,2,1,""],read:[21,3,1,""],read_raw:[21,3,1,""],reset:[21,3,1,""],start_log:[21,3,1,""],start_log_raw:[21,3,1,""],stop_log:[21,3,1,""],stop_log_raw:[21,3,1,""]},"pynq.iop.pmod_als":{PMOD_ALS:[21,1,1,""]},"pynq.iop.pmod_als.PMOD_ALS":{get_log:[21,3,1,""],iop:[21,2,1,""],log_interval_ms:[21,2,1,""],mmio:[21,2,1,""],read:[21,3,1,""],set_log_interval_ms:[21,3,1,""],start_log:[21,3,1,""],stop_log:[21,3,1,""]},"pynq.iop.pmod_cable":{PMOD_Cable:[21,1,1,""]},"pynq.iop.pmod_cable.PMOD_Cable":{cable:[21,2,1,""],direction:[21,2,1,""],index:[21,2,1,""],iop:[21,2,1,""],read:[21,3,1,""],set_cable:[21,3,1,""]},"pynq.iop.pmod_const":{BIN_LOCATION:[21,5,1,""],IOPMM_PMODIO_BASEADDR:[21,5,1,""],IOPMM_SPI_0_BASEADDR:[21,5,1,""],IOPMM_SWITCHCONFIG_BASEADDR:[21,5,1,""],IOPMM_XIIC_0_BASEADDR:[21,5,1,""],IOP_SWCFG_IIC0_BOTROW:[21,5,1,""],IOP_SWCFG_IIC0_TOPROW:[21,5,1,""],IOP_SWCFG_PMODIO0:[21,5,1,""],IOP_SWCFG_PMODIOALL:[21,5,1,""],MAILBOX_OFFSET:[21,5,1,""],WRITE_CMD:[21,5,1,""]},"pynq.iop.pmod_dac":{PMOD_DAC:[21,1,1,""]},"pynq.iop.pmod_dac.PMOD_DAC":{iop:[21,2,1,""],mmio:[21,2,1,""],write:[21,3,1,""]},"pynq.iop.pmod_dpot":{PMOD_DPOT:[21,1,1,""]},"pynq.iop.pmod_dpot.PMOD_DPOT":{iop:[21,2,1,""],mmio:[21,2,1,""],write:[21,3,1,""]},"pynq.iop.pmod_iic":{PMOD_IIC:[21,1,1,""]},"pynq.iop.pmod_iic.PMOD_IIC":{cr_addr:[21,2,1,""],drr_addr:[21,2,1,""],dtr_addr:[21,2,1,""],iic_addr:[21,2,1,""],iop:[21,2,1,""],receive:[21,3,1,""],rfd_addr:[21,2,1,""],scl_pin:[21,2,1,""],sda_pin:[21,2,1,""],send:[21,3,1,""],sr_addr:[21,2,1,""]},"pynq.iop.pmod_io":{PMOD_IO:[21,1,1,""]},"pynq.iop.pmod_io.PMOD_IO":{direction:[21,2,1,""],index:[21,2,1,""],iop:[21,2,1,""],read:[21,3,1,""],write:[21,3,1,""]},"pynq.iop.pmod_led8":{PMOD_LED8:[21,1,1,""]},"pynq.iop.pmod_led8.PMOD_LED8":{index:[21,2,1,""],iop:[21,2,1,""],off:[21,3,1,""],on:[21,3,1,""],read:[21,3,1,""],toggle:[21,3,1,""],write:[21,3,1,""]},"pynq.iop.pmod_oled":{PMOD_OLED:[21,1,1,""]},"pynq.iop.pmod_oled.PMOD_OLED":{clear:[21,3,1,""],draw_line:[21,3,1,""],draw_rect:[21,3,1,""],iop:[21,2,1,""],mmio:[21,2,1,""],write:[21,3,1,""]},"pynq.iop.pmod_tmp2":{PMOD_TMP2:[21,1,1,""]},"pynq.iop.pmod_tmp2.PMOD_TMP2":{get_log:[21,3,1,""],iop:[21,2,1,""],log_interval_ms:[21,2,1,""],mmio:[21,2,1,""],read:[21,3,1,""],set_log_interval_ms:[21,3,1,""],start_log:[21,3,1,""],stop_log:[21,3,1,""]},"pynq.mmio":{MMIO:[18,1,1,""]},"pynq.mmio.MMIO":{base_addr:[18,2,1,""],base_addr_offset:[18,2,1,""],debug:[18,2,1,""],length:[18,2,1,""],mem:[18,2,1,""],read:[18,3,1,""],write:[18,3,1,""]},"pynq.pl":{Bitstream:[18,1,1,""],Overlay:[18,1,1,""],PL:[18,1,1,""],PL_Meta:[18,1,1,""]},"pynq.pl.Bitstream":{bitfile_name:[18,2,1,""],download:[18,3,1,""],timestamp:[18,2,1,""]},"pynq.pl.Overlay":{bitfile_name:[18,2,1,""],bitstream:[18,2,1,""],download:[18,3,1,""],get_gpio_state:[18,3,1,""],get_gpio_user_ix:[18,3,1,""],get_ip_addr_base:[18,3,1,""],get_ip_addr_range:[18,3,1,""],get_ip_state:[18,3,1,""],get_timestamp:[18,3,1,""],gpio_dict:[18,2,1,""],ip_dict:[18,2,1,""],is_loaded:[18,3,1,""],load_ip_data:[18,3,1,""],reset:[18,3,1,""],reset_gpio_dict:[18,3,1,""],reset_ip_dict:[18,3,1,""]},"pynq.pl.PL":{bitfile_name:[18,2,1,""],get_gpio_names:[18,6,1,""],get_gpio_state:[18,6,1,""],get_gpio_user_ix:[18,6,1,""],get_ip_addr_base:[18,6,1,""],get_ip_addr_range:[18,6,1,""],get_ip_names:[18,6,1,""],get_ip_state:[18,6,1,""],gpio_dict:[18,2,1,""],ip_dict:[18,2,1,""],load_ip_data:[18,6,1,""],reset:[18,6,1,""],reset_gpio_dict:[18,6,1,""],reset_ip_dict:[18,6,1,""],timestamp:[18,2,1,""]},"pynq.pl.PL_Meta":{None:[18,2,1,""],bitfile_name:[18,2,1,""],gpio_dict:[18,2,1,""],ip_dict:[18,2,1,""],timestamp:[18,2,1,""]},pynq:{general_const:[18,0,0,"-"],gpio:[18,0,0,"-"],mmio:[18,0,0,"-"],pl:[18,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","staticmethod","Python static method"],"5":["py","data","Python data"],"6":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:staticmethod","5":"py:data","6":"py:classmethod"},terms:{"00v":1,"0x0":15,"0x00000004":22,"0x00000010":22,"0x00000100":22,"0x0000_0000":15,"0x0000_7fff":15,"0x01":21,"0x1":15,"0x100":21,"0x1000":15,"0x104":21,"0x108":21,"0x10c":21,"0x120":21,"0x2":15,"0x3":15,"0x4":15,"0x40000000":16,"0x4000_0000":15,"0x4000_7fff":15,"0x40080_000":15,"0x4008_0000":15,"0x4200_0000":15,"0x4200_7fff":15,"0x4400_0000":15,"0x4400_7fff":15,"0x4600_0000":15,"0x4600_7fff":15,"0x5":15,"0x6":15,"0x6fff":15,"0x7":15,"0x7000":15,"0x7ffc":15,"0x8":15,"0x8000":[15,16],"0x9":15,"0xa":15,"0xaa":21,"0xb":15,"0xc":[15,21],"0xd":15,"0xe":15,"0xf":15,"0xff":21,"1080p":14,"10dof":21,"10k":21,"1280x1024":[14,23],"1280x720":[14,23],"128x32":21,"12_modul":15,"1920x1080":[14,23],"1x6":12,"2x4":12,"2x6":12,"32kb":15,"345x":22,"3mm":14,"3rd":22,"4gb":8,"4th":21,"5th":22,"60hz":[14,23],"640x480":[14,23],"640x490":14,"650mhz":10,"800x600":[14,23],"9dof":21,"9th":22,"__init__":15,"_audio_ctrl":19,"_framebuff":23,"_iop":[0,15,21],"_private_":0,"_public_":0,"abstract":[6,7,10],"break":[9,10,12,14],"byte":[16,18,21],"char":15,"class":[0,1,6,7,10,11,12],"default":[3,8,9,12,16,21],"export":[3,6,9],"final":[12,15,21],"float":[1,21],"function":[0,1,4],"import":[0,1,9,10,11,12,14,15,16,18],"int":[10,14,18,20,21,22,23],"long":9,"new":[4,6,7,9,12,14,15],"public":[6,9],"return":[1,4,9,10,12,14,15,18,20,21,22,23],"short":1,"static":[0,3,6,8,9,15,18,19,23],"super":18,"switch":[0,2,3,8],"true":[10,18,21],"try":[5,8,9,10,12],"void":[13,15],"while":[4,12,14,15,16,21,23],a_gpio:13,a_int:13,abl:9,about:[0,4,9,14,16,18,22],abov:[1,3,9,10,12,16],absolut:[18,22],academ:6,acceler:[4,21],acceleromet:21,accept:[1,6],access:[0,3,7],accessori:[4,12],accompani:9,accord:[13,20,21],account:[3,15,21],achiev:[6,7],ack:22,act:[0,3,9],action:9,activ:[3,9,14,23],actual:[0,10],ad2:21,ad5160:21,ad5628:21,ad7991:21,adapt:3,adc081s021:21,adc121c021:21,adc:0,adc_id:1,adc_port:12,add:[4,9,15],addit:[0,1,8,11,15,16,18],addition:10,address:[3,8,13,15,16,18,21,22],adjac:[9,10,12,14],adopt:[6,7],adt7420:21,advanc:8,affect:12,after:[0,4,8,14,15,18,21,22],again:[1,12,14],against:4,agnost:7,aid:4,aim:7,align:[1,12,18],all:[0,1,3,4,6,7,8,9,10],all_ints_with_most_factor:10,alloc:[3,15],allow:[0,1,4,8],along:[9,15,21,22],alreadi:[12,15],als_program:15,also:[0,1,3,4,6,7,8,9,10,12,13,14,15,18,22,23],alt:9,altern:[3,14,21],although:9,altitud:21,alwai:[0,6,13],ambigu:9,among:[6,23],analog:[4,6,7,12,13,21],analyt:4,angl:21,ani:[1,3,7,8,9,10,13,14,15,16,21,22],anim:[9,14],anoth:[9,10,21],ansi:[9,10,12,14],answer:1,anywher:15,api:[3,4,6,7,12,13,15,18,19],appear:9,append:[10,15],appli:[1,22],applic:[3,4,6,7],appreci:10,approach:[6,7],appropri:[12,15],apsoc:[4,6,7],architect:[6,7],architectur:[7,15],arduino_io_switch_1:13,arduino_io_switch_v1_0:13,area:[8,9,12,15,16],aren:9,argument:[10,14,21],arm:[4,6,7,8,9,10,12,15,16],around:4,arrai:[4,7,9,14],artifact:6,asic:[4,7],ask:1,assert:1,assign:[0,8],associ:[9,16,22],assp:4,assum:[14,18,22],asynchron:4,atmospher:21,attach:[0,1,9,12,21],attempt:[0,3],attribut:[1,18],audio_sampl:14,audiovideo:[14,16],audiovideo_0:14,audiovideo_1:14,authent:9,author:9,autom:0,automat:[0,1,3,4,8,9,13,14,15,18,21],automaticlli:8,avail:[0,1,3,4,6,8,9,10,12,13,14,15,16,21],availabel:4,averag:10,avoid:1,axi:[15,21],back:[3,7,9,14,21],backtick:9,backward:3,bad:9,bar:[0,21],baromet:21,base64:9,base:[3,4,7,9,10,15,16,18,19,20,21,22,23],base_addr:18,base_addr_offset:18,bash:7,bat:8,batch:8,baud:3,beat:9,beauti:9,becaus:[9,10],becom:10,been:[3,6,8,15,16,18],befor:[4,12,15,18,21,22],begin:[1,9,10,12,14,15],behavior:6,below:[0,1,9,10,11,12,14,15,24],ben:5,benefit:7,best:[5,6,7,10],beta:8,better:[9,10],between:[1,6,9,10,12,15,16,21],bin:[15,18],bin_loc:21,binari:9,bind:9,bindl:18,bit:[1,3,4,12,13,14,15,16,21,22],bitfile_nam:18,bitstream:[3,6,14,16,18],block:[3,4,9,12,13,15],blockquot:9,blue:[9,14],bmp180:21,bold:9,book:5,bool:[18,21],boot:[0,8,24],border:9,borrow:7,both:[1,4,6,7,9,10,12,14,18,21],bottom:[12,21],boundari:15,bram:15,braod:6,breadcrumb:9,bridg:4,bridgewat:9,bright:21,bright_level:21,brightest:12,broker:7,brows:[0,8],browser:[4,5,7],bsp:[4,13,15],build:[3,4,7,8,9],built:[0,4],burst:21,button:[0,2,9],buzzer:[0,21],bypass:3,bytearrai:23,call:[7,9,10,11,14,15,18,21],caller:15,can:[0,1,3,4,6,7,8,9,10,11,12,13,14,15,16,18,20,21,22,23],cannot:[3,7],capabl:9,captur:13,card:[3,4],carreau:9,carri:14,caus:[14,16],caution:18,cdata:22,celsiu:21,certain:22,cffi:22,ch1:21,ch2:21,ch3:21,chacon:5,challeng:6,chang:[3,8,9,11,12,14,23],channel:[13,14,19,21],characterist:4,cheat:5,check:[1,3,8,9,10,11,14,15,16,18,21],checkbox:9,child:[1,19],chip:[4,6,7,21],choic:7,choos:15,chosen:15,chrome:8,circuit:[4,6,7],classic:4,classmethod:18,classroom:8,clb:4,clean:4,clear:[12,21],cli:22,click:[3,9,24],clickabl:9,client:15,clk:22,clock:15,close:[9,12],cmd:21,cmd_offset:15,code:[0,4,6,7,8],coher:6,collaps:9,colleagu:7,column:21,com:[4,9,22,24],comand:15,combin:[7,9,10],come:[3,12],command:[3,4,8],commandchar:[9,10,12,14],comment:[9,10,12,14,22],common:[0,4,6,7],commun:[3,4,6,7,9,12,15,16],compar:[1,13,15],compass:21,compat:[3,8],compil:[4,13],complementari:7,complet:[1,9,15],complex:9,complic:9,compon:4,comprehens:[8,10],compris:21,comput:[3,4,7,8,9,10],concept:[0,6,16],condit:1,conf:3,config:21,configur:[3,4,6,8],configurearduinoswitch:13,configureswitch:[13,15],confirm:[1,11,15],conigur:8,connect:[0,1,3,4],connector:1,consid:[3,6,10,15],consist:[4,9,10,12],consol:9,constant:[13,15,21],construct:10,constructor:14,consum:16,contact:17,contain:[0,4,9,10,12,13,14,15,18],content:0,context:7,continu:[6,8,10,15,16],contrast:[7,21],control:[0,3,4,6,9],conveni:9,convent:15,convers:21,convert:[4,9,10,12,15,21],copi:[5,8,9,12,14,15,23],core:[4,10,15],correct:[1,3,14,18,21],correctli:[1,3,8,21],correspond:[1,6,8,11,13,15,18,21],cortex:4,cost:4,could:1,count:[4,9,10],courtesi:9,cover:[1,16],coverag:10,cpu:[4,7,8],cpython:[6,7],cr_addr:21,craft:6,creat:[3,4,6,7,9,11,12],creation:9,critic:6,cross:[4,15],css:7,csv2sr:22,csv:22,ctrl:9,current:[1,6,8,9,12],custom:[1,3,4,6,7,12,15,16],customiz:4,d10:13,d11:13,d12:13,d13:13,d_gpio:13,d_int:13,d_miso:13,d_mosi:13,d_pwm0:13,d_pwm1:13,d_pwm2:13,d_pwm3:13,d_pwm4:13,d_pwm5:13,d_spiclk:13,d_ss:13,d_timer:13,d_uart:13,da4:21,dac:[0,1,4],dac_id:1,dac_loop:12,dac_port:12,dai:[7,18],damag:1,daringfirebal:9,darkest:12,dashboard:7,dat:22,data:[3,4,6,9,12,14,15,18,21,22],data_in:21,date:7,debug:[4,12,15,18,21],decad:6,decid:21,declar:[14,15],decod:[15,22],decoded_fil:22,decor:1,dedic:[9,12,13],def:[1,9,10,12,15],defin:[6,10,15,18],definit:[0,4,13,15,18],degre:21,delai:12,delay_sec:12,delet:9,deliv:1,demo:1,demonstr:[10,11,15,21],dens:9,depend:[7,9,12,22],deploi:[6,7],deprec:9,depress:11,deriv:0,describ:[0,1,9,15,16],descript:15,design:[3,4],desir:[1,4,21],desktop:8,detail:[3,7,8,9,24],detect:14,determin:[6,10,21],develop:[0,4,5,6,7,15,21],developmnet:4,deviat:21,devic:[0,4,6,7,11,12,14,15,18,21,23],devmod:[0,2,18],dhclient:3,dhcp:[0,3,8],diagram:13,dialog:9,dict:18,dictat:7,dictionari:[16,18],differ:[3,4,6,7,8,9,11,12,14],digil:12,digit:[4,10,12,13,21,22],dimens:14,dimension:14,din:16,direct:[0,4,18,21,23],directli:[1,3,7,8,9,11,12,14,22,24],directori:[0,1,9,15],disabl:[3,8],disconnect:[14,23],discoveri:18,displai:[9,12],dissemin:6,dist:[1,21],distinct:7,distinguish:4,dlength:21,dma:22,dmp:21,doc:5,dock:3,docstr:9,documemt:4,doe:[3,8,9,18,21,22],doesn:12,domain:[3,6],don:[3,9],done:[0,9,13,14,15,16,21,22],dot:1,doubl:[9,12],down:[9,12],download:[5,12,14,15,16,18],dpot:[4,21],drag:9,draw:[14,21,22],draw_lin:21,draw_rect:21,drive:[3,8],driver:[4,6,12],drone:[3,6],dropbox:9,dropdown:9,drr:21,drr_addr:21,dsp:4,dtr:21,dtr_addr:21,dual:[4,10,12,15],due:[12,21],dump:14,duplic:9,dure:[1,15],dutch:9,dwidth:21,dynam:[3,12,16],each:[0,1,7,9,10,11,12,13,14,15,16,21],earphon:14,eas:16,easi:[6,9],easier:7,easili:23,editor:[0,5,7],effect:[6,21],effici:[6,7,9,15],effort:16,eight:[6,21],either:[9,14,15,18,20,21],electron:4,element:[6,7,9,21],elf:15,els:[10,11,12,14],email:9,emb:[6,9],embed:[3,4,6,7],emit:21,emploi:3,empti:[18,21],emul:3,enabl:[0,3,4,6,7,8,9,15,18],encod:9,encourag:15,end:[0,1,4,9,10,12,14,21,24],endswith:10,enforc:1,engin:[6,7],enough:[6,9],ensur:[1,3,14,15,16],enter:1,entir:[1,4,9,18],entri:[6,16,18],enumer:9,environ:[1,4,7,9,15,16],equal:[6,10,12],equat:4,equip:3,equival:[1,14,15],error:[9,10,12,16],esc:9,etc:[3,4,8,9,22],eth0:3,ethenet:3,ethernet:[0,3,8,24],eval:4,evalu:4,even:[6,8,9,16],everi:[7,14],evolv:6,exactli:3,exampl:[0,1,3,4,6,8,9],excel:8,except:[1,10,14],exchang:4,exclus:[7,10],execut:[3,4,5,9,11,12,14,15],exist:[3,4,6,9,12,15],exit:21,expect:[6,10,14,15],expertis:[7,16],explain:[1,9,15],explicit:9,explicitli:[9,14],exploit:[6,7],explor:8,expos:[6,18,23],express:[4,9],extend:[6,7],extens:[1,4,5,7,9,22],extern:[12,13,15],extract:[14,22],fabric:[4,12,16],face:9,factors_and_prim:10,factors_of_i:10,fail:[0,1],fall:[3,7],fallback:0,fals:[10,18],familiar:[7,8,9],fast:[6,14],faster:[14,23],featur:[0,4,8,10,13,15],feel:3,few:[6,8,9,11],fewer:7,ffi:22,field:[4,7],fifo:21,figur:11,file:4,filenam:[9,14,23],filesystem:9,fill:21,filter:10,find:[0,3,6,10,16],finish:[14,15],firefox:8,first:[1,7,8,9,10,11,14,15,16,21],fit:15,five:0,fix:[13,14],flag:1,flash:[3,11],flat:9,flexibl:[6,12,15,16],flip:[20,21],flow:[3,15],focus:6,folder:[0,8,9,12,15,16,22],follow:[0,1,3,7,9,10,12,13,14,15,18,21,24],forc:[9,10,12,14],foremost:9,form:[4,10,23],format:[9,10,12,14,15,18,21,22],found:[1,9,13,15,22],four:[0,9,11],fpga:[3,4,6,7,12,15,16],frac:9,fraction:10,frame_buff:[14,23],frame_height:[14,23],frame_index:[14,23],frame_index_next:[14,23],frame_raw:[14,23],frame_width:[14,23],framework:[4,6,7],free:[4,5],frequenc:4,friendli:9,from:[0,1,3,4,5,6,7,8,9,10,11,12,13],front:4,ft2232hq:4,ftdi:4,ftdichip:4,full:[1,4,8,15,16,22],fundament:[6,8],further:[6,9],furthermor:9,futur:4,gate:[4,7],gaug:21,geneat:4,gener:[4,6,8],general_const:2,get:3,get_accl:21,get_altitud:21,get_atm:21,get_cmd_word:21,get_compass:21,get_gpio_bas:18,get_gpio_nam:18,get_gpio_pin:18,get_gpio_st:18,get_gpio_user_ix:18,get_gyro:21,get_head:21,get_ints_with_most_factor:10,get_ip_addr_bas:18,get_ip_addr_rang:18,get_ip_nam:18,get_ip_st:18,get_log:[12,21],get_log_raw:21,get_pressur:21,get_sampl:15,get_switch_config:21,get_temperatur:21,get_tilthead:21,get_timestamp:18,getter:18,getting_start:[9,12,14],gibianski:9,gist:9,github:[0,4,8],give:[1,3,9,10,12],given:[1,3,4,6,9,10],global:1,gnd:[1,12,21],goal:6,good:[1,3],googl:[5,22],gpio:[2,12,13,15],gpio_0:15,gpio_1:15,gpio_2:15,gpio_3:15,gpio_4:15,gpio_5:15,gpio_6:15,gpio_7:15,gpio_dict:[16,18],gpio_index:18,gpio_kwd:18,gpio_nam:18,gpio_user_index:18,gpiochip138:18,gr1:12,gr2:12,gr3:12,gr4:12,gr_id:21,grant:9,great:9,greater:6,green:[3,9,14,21],green_to_r:21,grei:9,ground:12,group:11,grove:0,grove_adc:[2,18],grove_buzz:[2,18],grove_imu:[2,18],grove_ledbar:[2,18],grove_ol:[2,18],grove_pir:[2,18],guess:9,gui:15,guid:[1,3,24],gyro:21,gyroscop:21,handl:[9,18],hang:14,happen:9,hard:[4,9],hardwar:[4,6,7,12,15,16,21],hardwav:15,haskel:9,have:[1,3,6,7,8,9,10,13,14,15,16,18,22,24],hdf:4,hdmi:0,head:4,header:[9,13,15,22],headphon:[0,14,19],headpon:19,heap:15,height:[14,23],held:18,hello:[0,9,12],help:[8,9,16,22],henc:[6,18],here:[9,10,16,22],hex:[16,18],hierarch:9,high:[7,9,16,21],higher:[1,6,7,10,14,16],highest:6,highli:[6,9,16],highlight:[9,11,15],hit:9,hlx:15,hold:[14,18],holist:6,home:[0,3,8,9,12,14],honk:9,horizont:[9,21],host:[0,3,4,8,9],hostnam:[3,8],hour:18,hover:9,how:[0,1,3,6,8,10,15,16],howev:[3,6,7,9,12,14,15,16],hph:[14,19],html5:9,html:[7,8],http:[3,8,9,22,24],human:22,hundr:7,hw_def:15,i2c:[4,13,22],i2x:13,i_max:10,i_min:10,icon:9,idea:9,ident:15,identifi:6,idiom:6,idl:[15,21],ignor:[11,21],igo:9,ihaskel:9,iic0:21,iic:[4,12,13,15,21],iic_addr:21,iic_byt:21,ijulia:9,illumin:21,illustr:9,imag:[0,1,3,4],img:9,immedi:3,implement:[0,1,4,7,9,10,12,15,16],impli:3,implicit:9,importantli:9,improv:[6,7],imu:21,inc:12,includ:[0,4,5,9,10,12,13,15,16,21,22,23],inclus:10,incorpor:7,increas:[6,14],indent:9,independ:[8,14],index:[14,15,16,17,18,20,21,23],indic:[0,1,3,8,9,12,13,14,15],individu:[6,9,15,21],inform:[1,4,12,14,16,18,22],infrastructur:[1,7],infti:9,infus:4,inher:6,inherit:[19,21],initi:[0,14,15,21],inlin:9,input:[1,4,9,12,13,14,18,20,21,22,23],input_fil:15,insert:[3,8,9,12,14,24],insid:[0,4,9,12,15,16],inspir:7,instal:[0,4,9],instanc:[12,14,15,16,18,21,22],instanti:[0,11,12,14,15,18,21],instead:[1,6,9],instruct:[8,12,15,21,24],int_with_most_factor:10,integ:[10,14,18,22,23],integer_list:10,integr:[4,6,7,10,16],intellig:4,intend:[0,1,9,15,16],inter:4,interact:[4,5,6,7],interconnect:4,interfac:[0,1,3,4,6,7,9,12],intern:[0,1,4,9,12,13,14,15,21],internet:8,interrupt:[9,13],interv:[10,12,21],interval_check:10,interval_max:10,interval_min:10,introduc:23,introduct:5,introspect:9,ints_with_most_factor:10,intuit:10,invalid:[10,14],invers:21,invoc:1,iop1:15,iop2:15,iop:[0,2,4,12],iop_swcfg_iic0_botrow:21,iop_swcfg_iic0_toprow:21,iop_swcfg_pmodio0:21,iop_swcfg_pmodioal:21,iop_switch_config:21,iopmm_pmodio_baseaddr:21,iopmm_spi_0_baseaddr:21,iopmm_switchconfig_baseaddr:21,iopmm_xiic_0_baseaddr:21,ip_dict:[16,18],ip_kwd:18,ip_nam:18,ipynb:[9,10,16],ipython:[7,9,14,22],irkernel:9,irubi:9,is_cmd_mailbox_idl:21,is_load:18,isinst:10,issu:8,ital:9,item:[9,16],itself:[7,8],j14:8,java:22,javascript:[7,9],jp1:[12,21],jpeg:23,jpg:14,json:9,julia:9,julialang:9,jupyt:[0,3,4],jupyter_notebook:14,just:[6,9,14,19],keep:[0,18],kei:[4,6,7,10,16,18],kept:16,kernel:[6,7],keyword:18,kit:[4,15],know:[3,8,9,10],known:[4,10,16],label:12,lan:3,languag:4,laptop:[3,8,14,24],larger:[6,10],last:[11,14],latest:0,latex:4,launch:15,layer:4,lead:10,learn:[0,4,5,6],least:8,leav:12,led05031p:21,led0:11,led8:[0,1,21],led:[0,1,2,3,8],ledbar:21,left:[9,12,14,21],len:10,length:[18,21,22],less:[10,14,16],let:[9,10,11],level:[0,4,6,7,9,10,14,15,16,21],leverag:22,lib:[1,21],librari:[0,4,7,12,13,15,22],librariesto:4,light:[0,3,11],like:[0,6,7,9],limit:13,line:[0,4,9,10,12,14,15,21,22],linear:9,linein:[14,19],link:[3,4],linux:[1,3,6,7,8,15,18],lisp:4,list:[1,9,10,11,14,16,18,21,22],lit:21,littl:10,live:[4,8,9],load:[3,8,9,12,15],load_ip_data:18,load_switch_config:21,local:[1,3],locat:[14,15,16,23],log:[9,12,21],log_interval_m:21,log_interval_u:21,log_m:21,log_run:21,logic:[0,4,7,11,12,16,18,21],login:3,logo:9,longer:15,look:15,loop:[1,4,12,14,15,21],loopback:[1,21],loos:6,lost:18,low:[0,4,6,7,15,21],lower:[1,7,15,21],lowest:[4,10,14],lsb:[21,22],ltd:4,m4v:9,machin:[0,3,4,8],made:3,magic:6,magnetomet:21,mai:[3,8,9,10,12,14,15,16,21,23],mailbox:[15,21],mailbox_cmd_addr:15,mailbox_data:15,mailbox_offset:[15,21],mailbox_py2iop_cmd_offset:15,main:[0,7,8,9,12,15,21],mainstream:8,maintain:[3,7,9],make:[1,6,7,8,9,10,14,15,16],makefil:[15,16],mani:[1,3,6,7,8,9,10,12,15,16],manipul:[9,11],manner:9,manufactur:4,map:[0,1,4,6,9,10,13],margin:9,mark:1,markup:[4,9],mask:22,master:[4,15],match:[7,8,12,15],materi:[8,9],mathemat:9,mathjax:9,matrix:[4,21],max_button:11,max_l:11,max_no_of_factor:10,max_switch:11,maxim:6,maximum:[14,21,23],mb_1_reset:16,mbbin:15,mean:[9,13,15,18,21],meaning:14,meant:9,measur:[12,21],med:21,media:[4,9],medium:21,mega:4,melodi:21,mem:18,member:18,memori:[4,12,14],menubar:9,messag:[1,9,10,12],met:1,meta:18,metadata:22,method:[1,6,10,11,14],mhz:15,micboblaz:15,micro:[3,4],microblaz:[0,4,12,13,15,18,21],microprocessor:[4,7],microsecond:18,might:6,millisecond:21,mimic:4,mine:10,minimum:[8,21],minrk:9,minut:18,miso:15,mix:4,mmap:18,mmio:[2,15],model:[4,7,21],modern:[4,7,10],modif:9,modifi:[0,3,9,12,14,15,16,22],modul:[0,1],modular:0,monitor:14,mono:14,monochrom:21,month:18,more:[0,1,3,4,6,7,8,9],mosi:15,most:[1,3,4,7,9,10,15,23],motion:21,motor:6,mpu9250:21,mpu:21,msb:21,msp:4,much:[4,6,8,10,15,16],multi:[4,10],multipl:[0,3,7,8,9,21,22],must:[1,4,12,14,15,18,23],mute:14,mutual:7,my9221:21,my_peripher:15,myip:16,name:[0,1,3,13,15,16,18,22],namespac:9,narr:9,nativ:[5,8],navig:[0,3],nbconvert:9,nbetween:10,nbviewer:9,necessari:[8,15,16],need:[1,3,6,8,9,10,12,14,15,16,18,21],neither:6,neon:15,nest:9,net:9,network:[0,3,8,9],never:9,new_fram:23,new_frame_index:23,new_host_nam:3,new_img_path:14,new_mod:23,next:[9,10,12,14,15,23],nice:9,ninsert:1,no_of_factor:10,no_with_most_factor:10,node:9,non:15,none:[10,16,18,20,21,22,23],nonetheless:8,normal:[9,21],note:[0,1,3,6,8,9,11,12,14,15],notebook:[0,4,5,6,7],noth:23,notic:[10,15],novel:6,now:[6,8,9,11,15],num_byt:21,num_cycl:21,number:[6,7,8,9,10,11],numer:4,objcopi:15,object:[6,9,10,14,15,18,19,20,21,22,23],obtain:8,obviou:9,oct:5,off:[11,12,20,21],offboard:21,offchip:21,offici:[0,5,8],offload:15,offset:[16,18],often:[7,9],ohm:21,old:15,ole35046p:21,oled_port:12,onboard:1,onc:[3,6,7,8,14,15,16],onchip:21,onli:[1,6,9,10,12,14,15,16,18,21,22,23],onlin:5,onto:[0,8,9,18,21],open:[4,6,7],oper:[0,3,7,9,12,15,21],optim:[3,6,16],option:[1,3,23],orang:3,order:1,org:[4,9],organ:[1,9,21],orient:[1,6],orig_img_path:14,origin:[4,9,10],originalverbatim:[9,10,12,14],osx:8,other:[0,3,4,6,7,8,9,10,12,14,15,24],otherwis:[1,18,20,21,22],our:[1,18],out:[0,8,10,12,14,15,16,18,21,23],output:[1,4],outputfil:15,outsid:[9,14,16,21],over:[4,6,9,10,12],overal:6,overflow:15,overhead:[16,23],overlai:[0,1,3,4],overlay_integr:16,overrid:21,overwrit:23,own:[0,1,9,12,14],pacakg:12,packet:4,page:[5,9,17,18,21],pair:16,panel:21,paper:6,paradigm:7,paradigmat:10,paramet:[6,10,12,15,18,20,21,22,23],parent:19,pariti:3,pars:[16,22],part:[1,11,12,13,15,16],partial:3,particular:[6,9,16],particularli:4,pass:[1,9,10,12,14,15],password:[0,3,8,9,24],past:12,path:[15,18,22,23],pattern:6,paus:[14,23],pdf:[4,5,9],pend:15,per:4,perceiv:21,perform:[7,9,10,14,15],period:3,periph:12,peripher:[0,4,8],pgood:8,phone:8,photo:11,physic:[0,15],pick:8,piec:9,piecewis:4,piezo:21,pin0:15,pin1:15,pin2:15,pin3:15,pin4:15,pin5:15,pin6:15,pin7:15,pin:[1,4],ping:3,pir:[0,21],pixel:[14,21,23],pl_meta:18,place:[0,3,13,15],plai:[9,21],platfrom:15,play_melodi:21,play_ton:21,pleas:[0,1,8,14,21],plot:[9,22],plug:[1,3,8,12],pmod_adc:[1,2,12,18],pmod_al:[2,12,15,18],pmod_cabl:[2,18],pmod_const:[2,13,15,18],pmod_dac:[1,2,12,18],pmod_dpot:[2,18],pmod_id:[15,21],pmod_iic:[2,18],pmod_init:15,pmod_io:[2,18],pmod_io_switch_1:15,pmod_led8:[2,18],pmod_ol:[0,2,12,18],pmod_tmp2:[2,18],pmoda4:12,pmodad2:12,pmodal:[12,15],pmodda4:12,pmodiic:0,pmodio:[0,21],pmodol:12,png:9,point:[6,15,16,21],pointer:22,popular:[4,9],port:[0,1,3,4,8,12,14,15,24],portabl:6,portal:3,posit:[11,14,15,21],possibl:[6,7,9,13,14,16],post:[3,6,18],potentiomet:[4,21],power:[0,3,6,8,10,21,24],pprint:10,practic:[0,1,6,7,9,12],pre:9,precis:21,precompil:[15,16],predefin:15,prefer:[0,9],prefix:0,preinstal:0,preload:[0,8],premier:6,present:[7,15],preset:21,press:[1,9,11,20],pressur:21,prevent:0,previou:12,primal:10,primer:5,primes_1066:10,primes_1066_averag:10,primes_1066_ends3:10,primes_between:10,primes_in:10,print:[4,9,10,12,14,21],print_error_msg:10,print_ints_with_most_factor:10,printf:9,privat:6,pro:5,probe:22,problem:[8,17],proce:7,process:[1,4,6,8,9,14,15,16,22],processor:[1,4,6,7,10],produc:[4,15],profil:[4,15],program:[3,4,5,6,7,8,9],programm:[0,3,4,6,7,8,10,11,12,16,18],programmat:9,prohibit:1,project:[3,4,5],promot:6,prompt:[1,3,8,9],properli:1,properti:10,proport:6,protect:[9,18],protocol:[4,9,22],provid:[1,4,6,7,8,9,10,12,13,15,21],publish:6,pull:[12,15],puls:[6,21],pulseview:22,puriti:9,purpos:[3,4,9,12,18],push:[3,4,11,20],pushbutton:11,put:21,pwm:[6,13,15],pynq_disable_static_ip_window:8,pynq_enable_static_ip_window:8,pytest:[0,1],python3:[0,1,21],python_factors_prim:10,python_logo:9,pythonxilinx:12,qualiti:6,quarter:14,question:1,quick:17,quickli:8,quit:[3,10],rais:[1,7,20,21,23],ram:15,ramp:21,rang:[1,3,4,6,8,9,10,11,12,14,16,18,21,23,24],rapidli:6,rare:23,rate:22,rather:16,raw:[9,21,23],reactiv:9,read:[1,4,8,9,11,12,14,15,16,18,20,21,23,24],read_cmd:21,read_raw:21,read_single_valu:15,readabl:[9,22],readi:8,readthedoc:4,real:15,realli:10,reason:[1,8,9],rebuild:[15,16],receiv:[4,15,21],recogn:[3,6,14,21],recommend:[8,9,15,16],recompil:15,reconfigur:[3,16],record:[9,16,21,22],rectangl:21,red:[1,3,14,21],reduc:10,redund:22,ref:12,refer:[0,1,3,4],refin:6,reflash:3,refus:9,regardless:14,regist:[13,15,21],rel:[6,7,9,21],relat:[1,6,8,21],relationship:6,releas:[8,15],reli:0,remain:[9,10],rememb:[8,14,15],remov:[6,22],renam:[9,12,15],render:[5,9],repl:4,replac:[3,15],report:10,repositori:[0,4,9,13,15,16],repres:[14,15],represent:[9,10],reprogram:4,req:22,request_iop:15,requir:[3,4,6,7,8,9,12,14,15,16,22],reserv:15,reset:[9,12,15,18,21],reset_gpio_dict:18,reset_ip_dict:18,resist:21,resistor:12,resolut:[14,21,23],resolv:3,resourc:16,respons:10,respositori:8,rest:[4,5],restrict:9,restructeredtext:9,restructur:4,result:[4,6,9,10,15,16],retriev:[20,21],reveal:9,review:10,rfd:21,rfd_addr:21,rgb:14,ribbon:1,rich:[4,9],right:[1,9,14,21],rout:[12,15],router:[3,8,24],row:[1,9,12,14,21],rubi:9,rule:9,runtimeerror:21,rxd:4,safari:8,sai:10,samba:[0,3,8],same:[0,1,3,8,9,12,14,15,18,21,22,23,24],sampl:[4,10,14,15,21,22],sampler:22,satisfi:21,save:[8,9,12,15,23],save_as_jpeg:[14,23],save_raw_as_jpeg:23,scala:9,scienc:4,scientif:4,scl:[15,21,22],scl_pin:21,scott:5,screen:21,screenshot:9,script:[3,4,8,10,12,22],sda:[15,21,22],sda_pin:21,sdcard:0,sdk:[4,15],search:[17,18],second:[1,4,8,14,15,16,18,22],section:[0,1,9,12,16],secur:4,see:[0,3,4,8,9,11,12,14,15,24],seen:9,seg_mb_bram_ctrl_1_mem0:16,segment:[16,21],select:[7,9,12,15,21,22],self:[0,9,15],semiconductor:4,send:[12,14,21],sens:[6,10,21],sensor:[0,4],sent:21,separ:[9,11,14,15],seprat:13,sequenc:[9,14,21],seri:4,serial:4,serv:[6,7,9,18],server:[0,7,8,9],servic:[8,9],session:9,set:[1,3,5,8,9,10,11,12,14,15,16,17,19,20,21,22,23],set_cabl:21,set_contrast:21,set_horizontal_mod:21,set_inverse_mod:21,set_level:21,set_log_interval_m:[12,21],set_metadata:22,set_normal_mod:21,set_page_mod:21,set_posit:21,sever:6,share:[3,4,6,8,9,12,14,15,23],sheet:5,shell:[4,15],shield:13,shift:9,ship:15,shortcut:9,shorthand:9,should:[1,3,8,9,12,14,15,16,18],show:[1,8,9,10,16,21,22],shown:[1,14,15,16],shut:9,shutdown:9,side:9,signal:[4,12,15,21,22],sigrok:22,silenc:9,silent:9,similar:[0,3,4,13,14],similarli:[9,16,21],simpl:[4,9,12,14],simpli:[6,10,15,21],simplifi:[6,7],simul:4,sinc:[1,18],singl:[0,1,3,4,6,7,9],singleton:18,site:[4,8],size:[6,14,15],skill:7,skip:1,skipif:1,slave:4,sleep:[9,11,12],slide:[9,11],slot:8,slow:14,slower:10,small:[1,6,7,12],smooth:14,snippet:10,soc:4,socket:3,soft:[4,18],softwar:[3,4],solomon:21,solut:6,some:[0,1,3,8,9,10,12,14,15,23],sort:10,sourc:[0,1,4,6,7,9,10,14,15,18,19,20,21,22,23],space:[9,15],spars:9,speaker:14,specfic:15,special:[9,12],specif:[0,4,6,7,9,13,14,16,21,23],specifi:[1,4,10,14,15,18,21,22,23],speed:[6,15],sphinx:4,spi:[4,12,13,15,21],spi_transf:15,spiclk:15,spring:3,sr2csv:22,sr_addr:21,src:[9,13,15],ssd1306:21,stack:[4,15],standalon:15,standard:[3,4,14,15],start:[0,1,3],start_log:[12,21],start_log_raw:21,start_po:22,state:[9,11,14,16,18,20,21,23],statement:1,station:3,statist:4,statu:[0,21],stderr:9,stickit:[12,15],still:[7,15],stop:[3,9,12],stop_log:[12,21],stop_log_raw:21,stop_po:22,store:[14,18,22,23],str:[10,12,18,21,22,23],straight:[1,21],straignt:21,straub:5,stream:[9,14,23],stress:10,strict:9,strictli:1,string:[1,10,14,18,21],studi:[6,8],style:[4,7],sub:[9,15],subdir:15,subdirectori:[9,22],sublist:9,submit:8,submodul:2,subpackag:[0,2],subsystem:[4,15],success:[6,7],sudo:3,suffici:[9,12,15],suit:[1,4,7,12,15],suitabl:6,sum:10,sum_:9,summari:1,superset:9,suppli:[0,1],supplier:[4,12],support:[0,3,4],sure:[8,15],surround:9,svg:9,swap:16,switch_config:21,switch_nmbr:12,synchron:4,syntax:9,sysf:18,systech:21,system:[0,3,4,6,7,9,15,16,18],tab:9,tablet:8,tag:9,take:[4,15,21,23],taken:[1,9,15],takluyv:9,talent:7,task:[4,6],tcl:16,teach:8,team:[5,8,24],techniqu:3,technolog:4,tell:10,temperatur:[0,21],templat:10,temporari:15,temptat:9,temt6000x01:21,term:[4,10],termin:[1,3],test_:1,test_dac_adc:1,test_led0:1,test_loop_singl:1,text:[4,9,12,21],than:[0,1,3,7,9,14,15,16],thei:[6,8,9,12],them:[3,4,6,9,10,11],themselv:3,therefor:4,thi:[0,1,3,4,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23],thing:9,third:16,thon:[0,7],those:[9,10],thousand:7,three:[7,9,10],through:[1,6,9,10,12,14,18,21,24],thu:9,tilt:21,time:[0,6,7,8,9,11,12,14,15,16,18,21,22],time_end:14,timeout:[21,22,23],timer0:13,timer0_6:13,timer1:13,timer1_7:13,timer2:13,timer3:13,timer4:13,timer5:13,timer:[12,13,15],timestamp:18,tmp2:[0,21],todai:4,togeth:[1,15,21],toggl:[11,20,21],tone:21,tone_period:21,tool:[4,5,7,15],toolbar:9,top:[4,9,12,14,15,21],topic:6,toplevel:4,total:12,tour:9,toward:21,trace:22,trace_buff:[2,18],trace_csv:22,trace_pd:22,trace_sr:22,track:[0,9,18,21],tracker:8,tradit:16,traffic:4,transact:15,transfer:[8,12],transform:4,translat:[15,21,22],transmitt:4,treat:10,tree:[9,15],tri_0:22,tri_1:22,tri_sel:22,trigger:13,tripl:9,tristat:22,tune:6,tupl:[10,14],turn:[0,8,11,12,18,20,21],tutor:5,tutori:[5,9],twice:9,twist:[1,21],two:[1,4,8,9,11,12,14,15,16,21],txd:4,typeerror:[10,21],typic:3,uart:[4,8,13],ubuntu:[0,3,8,10],ugli:9,under:[4,22],underli:15,underneath:8,understand:9,unexpect:[6,9],unformat:9,uniqu:[4,7,10],unit:15,univers:4,unless:[3,9],unlimit:22,unrend:9,until:[3,9,18],unus:21,updat:[4,15,18,21],upload:9,upper:[1,12,21],url:9,usag:1,usb:[3,4,8,24],user:[0,1,3,4,6,8,9,11,14,15,16,18,21,22,23],usernam:[0,3,8],usr:[1,21],usual:[4,18,22],util:9,utilis:22,val:21,valid:[14,21],valu:[1,9,12,13,14,15,16,18,20,21,23],valueerror:[20,23],variabl:[0,15,18,19],variant:6,variou:[9,21],vcc:[1,12],vcp:4,vdd:21,vector:15,veri:[7,8,16],verif:0,verifi:[3,12],version:[0,4,9,15,21,23],vga:0,via:[1,3,4,6,7,8,9,12,16,21],view:[8,9,16],virtual:4,visibl:[9,11],visual:[5,9],vivado:[4,13,15,16],volta:12,voltag:[1,12,21],vpn:3,vsrw:1,wai:[0,6,7,9,14,15],wait:[21,22,24],want:[3,9,10,14,15],warn:21,wave:22,wavedrom:22,wavedromskin:22,waveform:22,web:[4,6,7],webapp:9,webpag:[8,9],websit:[4,9],websocket:9,welcom:24,well:[1,6,7,9,15],what:[3,6,9,10,18],when:[3,4,8,9,10,12,14,15,16,18,21,22],whenev:[1,7],where:[0,10,12,14,15,16,21,23],wherev:[7,9],whether:[1,8,9,18,21],which:[1,4,6,7,8,9,10,12,14,15,16,21,22,23],who:[7,8],whole:9,whose:10,wide:[9,12,16],widget:[4,9],width:[6,14,21,23],wikipedia:4,win32diskimag:8,window:[0,8,12,15],wire:[1,3,4,12,21],wireless:3,wirelessli:3,within:15,without:[6,7,9,12],word:21,work:[1,7,8],workflow:9,workspac:15,world:[0,9,12],would:[3,9,10,18],wrap:[16,18,23],wrapper:0,writ:21,write:0,write_binari:21,write_bright:21,write_cmd:21,write_level:21,written:[4,6,7,9,12,15,18,21],www:4,xadc:[4,12,13],xilinx:[4,7],xpp:[0,3,8,14,24],year:18,yet:19,you:[0,3,4,8],your:[0,3,4,5,8,9,12,14],zero:[15,21],zeromq:9,zybo:[0,3,4]},titles:["The <code class=\"docutils literal\"><span class=\"pre\">Pynq</span></code> (Python on Zynq) Platform","Verification","pynq modules","Frequently Asked Questions (FAQs)","Glossary","Useful Reference Links","Appendix","Pynq Overview","Getting Started","Introduction to Jupyter Notebook","Cortex-A9 programming in Python","Programming Zybo&#8217;s onboard peripherals","Peripherals and the Pmod I/O overlay","Arduino IO Processor","The Audio-Video Overlay","IO Processors: Writing your own software","Working with Overlays","Python on Zynq (Pynq) Documentation","pynq package","pynq.audio package","pynq.board package","pynq.pmods package","pynq.trace_buffer package","pynq.video package","Quick Start"],titleterms:{"case":6,"class":15,"function":5,"new":16,"switch":[11,13,15,20],access:[8,14],acknowledg:9,adapt:12,adc:[1,12],all:11,allow:9,ambient:12,appendix:6,applic:[9,15],arduino:13,arduino_io_switch:13,ask:3,assign:12,asynchron:9,audio:[0,14,19],background:6,basic:9,binari:15,board:[0,8,15,20,24],browser:8,buffer:14,build:15,built:5,button:[11,20],cabl:1,calcul:10,captur:14,card:8,cell:9,characterist:6,code:[9,15],collect:1,combin:14,command:9,compil:15,compon:9,configur:12,connect:[8,24],connector:12,contact:24,content:[1,4,5,6,7,8,17,18,19,22,23],control:[11,14],cortex:10,creat:15,current:14,dac:12,dashboard:9,design:6,devmod:21,differ:15,displai:14,document:[0,9,17],driver:[13,15],edit:9,editor:9,embed:9,emul:5,enter:9,equat:9,examin:15,exampl:[10,11,12,15,16],exist:16,factor:10,faq:3,file:[8,9,15],flavor:9,frame:14,frequent:3,from:14,further:12,gener:9,general_const:18,get:8,git:5,github:9,glossari:4,goal:7,good:6,gpio:[16,18],grove:12,grove_adc:21,grove_buzz:21,grove_imu:21,grove_ledbar:21,grove_ol:21,grove_pir:21,hdf:15,hdmi:14,head:9,html:9,imag:8,indic:17,instal:15,intens:10,interact:8,interfac:13,introduct:9,iop:[13,15,21],jumper:1,jupyt:[5,8,9],kernel:9,keyboard:9,languag:6,larg:9,latex:9,layer:6,led:[11,20],light:12,link:5,load:16,local:9,manag:9,manual:5,map:15,markdown:9,memori:15,menu:9,method:15,micro:8,miscellan:1,mmio:[16,18],modal:9,mode:9,modul:[2,18,19,20,21,22,23],more:10,mous:9,navig:9,nbsphinx:5,notebook:[8,9],number:12,onboard:11,open:8,output:9,overlai:[6,12,14,16],overview:[7,9],own:15,packag:[0,15,18,19,20,21,22,23],peripher:[11,12],phase:1,pin:12,platform:0,pmod:[0,12,21],pmod_adc:21,pmod_al:21,pmod_cabl:21,pmod_const:21,pmod_dac:21,pmod_dpot:21,pmod_iic:21,pmod_io:21,pmod_io_switch_v1_0:15,pmod_led8:21,pmod_ol:21,pmod_tmp2:21,portal:[8,24],prepar:8,prerequisit:8,prime:10,problem:24,processor:[12,13,15],product:6,program:[10,11],project:[7,15],putti:5,pynq:[0,2,5,7,8,17,18,19,20,21,22,23,24],python:[0,5,10,15,17],question:3,quick:24,readback:14,refer:5,restart:9,restructuredtext:5,run:[1,9,15],runtim:15,secur:9,sensor:12,set:24,setup:[1,8],singl:11,softwar:[5,15],sphinx:5,start:[8,14,24],stdout:9,step:1,stop:14,structur:0,submodul:[18,20,21],subpackag:18,summari:7,support:[5,12,15],tabl:[1,4,5,6,7,8,17],technic:5,technolog:6,termin:5,test:[0,1],trace_buff:22,train:5,troubleshoot:8,type:1,verif:1,vga:14,video:[0,14,23],web:[8,9],work:16,write:[1,15],xilinx:15,you:9,your:15,zybo:[5,11,12],zynq:[0,17]}})