/**
 * 顺丰速递app   劲量抓app的cookie  小程序的也可以跑但是失效非常快
 
 * 7/5     完成签到，自动浏览任务领取积分
 * 9/22    重构代码，自动获取任务参数以保证任务成功率
 * cron 0 0 8 * * ? 定时自己改 每天一次
 
 * 抓包任意url https://mcs-mimp-web.sf-express.com/mcs-mimp/ 里的cookie只需要 sessionId=xxxxxxxxx这条
 * ========= 青龙--配置文件 =========
 * 变量格式: export sfCookie='ck@ck'  多个账号用 换行 或 @分割
 *  
 */
const $ = new Env("顺丰速运");
///////////////////////////////////////////////////////////////////
const notify = $.isNode() ? require("./sendNotify") : "";
const Notify = 1 		//0为关闭通知,1为打开通知,默认为1
var _0xodd='jsjiami.com.v6',_0xodd_=['‮_0xodd'],_0x4f4d=[_0xodd,'w6t7wrjDvsO9','O8OIDsKfw58=','wq5GCgBQ','JGJTR8KQ','wpXDqmkfGw==','ccK9wpnCo8Os','QsKRwq/ClQ0=','ZsKrwrPCucOZ','KULCvl/DjMKV','w4bDqlpxJkrCrMOA','w6x1eg7CuA==','CUjClnDDgw==','YSDjgLtSwow3w5c+44GFwpYVYSrCrMOww5wIY28YwqXCisKERsON6L+f5pm2wqM=','w7zorbvms7pnw48Sw74eecKRwrLCpMKXGMKef2ZKwpjChxjCrMKl','IG1/','fOi+pee6v+evu+WImOWmh+WJq++9leS7k+aUreW3veWvmOaLsw==','wozDkOi+mOe4neeuouWLjeWlhuWJoe+/reS5puaWreW2ueWut+aIoA==','w67ClyjCgMK2','wrvDl8O8bhw=','S+ivt+axqRbCnCfDjnlpwpYVYSrCrMOww5wIY28YwqXCisKE','w57Dqm4=','HnpKUsKL','csOgLDke','wozDtUTCs8Kk','woVfw4rDlMKz','w5IOXOODscOiw4wiw7oe44KEw5g1wqXCu8KfwqY+w63CrsKEw7JiCi7Ctui9k+aZk3Q=','akk+w6UhEg==','SsKlw4Q=','LsO+44OLwrMEw5DCu8Ok44OawqHDpQArw5TDnnMTdMKzwo/DiErCpnFx6L+v5pmadA==','w4BLdWzDgg==','wpIgLw==','wqUUHuOBncK2wobDq2PCheOCq08bw6PDqSlEw43CkcOWw75tCMKQYibovq/mmq0u','w4/ovZDlm6DmlqTmjrzCvsKCw6XDmHM8ZDt/PMKPQVbDhQ==','cSzDvQ==','BsOcwqQ=','wobDjOODnSjDisKhdcOr44GsUcOxJQXDvsOJw5vDng/CgloYAui9juabhRY=','w7huD8KOw6jopYrmn5DlkoHmlInmj7vDmDXCpcK7wp/Cpj7DrcKuwoTDsmI=','w5PDkW9EFQ==','RAzDosKQw6E=','woPDq1k=','w5Fa5p+J5aCl5YaN5Y2+6YSzw5g=','w65zwoXDo8OZ','ORnCqC0I','w53Di1pHEQ==','CTTDsMK3w6HCpCE=','XcOjIMKMwpbCoA==','XTstw44=','wpnDr0rCjcKr','wocL44Okw6rDslYkw5/jgavDoCPCi04nHcO4CsONdnbDkcOGw5AXAui9h+aahww=','d+iug+axgcO45L+95oGAwrvCmDIDa1N6LcK9ODM6bMOiw5hZ','IMKUA8OxDQ==','XsKNeA==','wrteSOOChMKOwrbDvzdf44Cgw7vDoRbCnhLCssKew6wywqYRYsOsw5sX6L2k5puawo0=','wroK44CXe8OCdSvDsuOAjBt4wojCsmh2EsO2wqjCmX4HwpjovZTmmaQe','FwsrZTrop4nmn5rlkqDmlLvmjaTDqsKpRXAfCcOIf0rCpsObwrI=','XitJZQU=','LsOVLg==','wolWw4HCmMKHw5vCij9cCMK6woZ8T3/DmGVkw5TCnjgvdcKzw5DCosKJ','wr/DknEAJm3DnsOh','VcKIw6EPDA==','wo/CuDQ4aR7Dv8KawrJwAuWGhOaLgeWIucKQ','d8OGbiXClsOW','w4TkuJ/otpTljYLDisKPw5pyTELDosOZbwEk','w4DDssKJw5An','HBDCvA8JPFfChw==','wqoRYURv','Y8KwwpXCpSk=','XMKlRznCjg==','w4N7UCrCpsKL','ccK1XDDCkA==','WCRUezI=','Mjxswpp4','HsKmw5d7MFE=','KsK7P8O5','OTfCkiUB','w7tNw45jOcKLw5HDlR7DpuW/hOWkvuOAneeujcO2','SuS6mei3peWPlOOCrG/DkMOyfTtSQcK3','44KdLSRXwobCheOBmHDovIzmmYzkvLLnrbrCoQ==','w6vDsUHDm8OR','w57Dqm5AJlE=','EBI8w6REwr3Cow==','VMKIwqTCqw==','QeOCq+iPr+WMquWNhOaUqeOCmA==','cQHDosKGw5s=','RuOAkuent+WJreacgOiuv+OCtw==','WStSYg==','DBrDrMKaw54=','MkHCrkNkAMOowr/CkMOXw77CgsOqXhLCtgPDicKPw43CrnLDmVZzT8Oaw7jCjB0=','w4vCr8OzPMOr','w4IgGsO9woTCtMO0JEE=','6Iy/5Y2G5Y+35peI','dcOaIjQKw6DCtw==','EDlpwo9t','w4B8VA==','w7lKwofDpcODXSXDlB/CkXvDgBZ2Uw==','PMK3O8OuNGE=','w6JJwp4=','SsOjP8KLwrDCqsKDwoU=','w59IbQ==','w7LCkTXCm8KIwpRkwrzCksOgLT1eXEc=','wqfDkcOhdT/Cng==','acONKw==','JMOZMg==','PMOFwoJZw7o=','Y8KTwrHCgBA=','JUHCuA==','aSLDqcK/w7gfLcKnTcKxw7jDrsKmw7jDpQ==','BQ8zw7FdwqI=','Ww4/','wpZKAw==','w4RLdHTDs34qw7l4aiDDg8OqOTg=','w7lKwofDpcOUWzXDnQ==','wp06TA==','wqfDkcOhdSLCk8Orw7LCkcOXUcODMRPCuQ==','aSLDqcK/w6US','UcOgJg==','dcObMzYbw7bCozDDpMKJ','X8KFwqA=','DzjDtcKuw6E=','FcKJP8OzfA==','QOiOlOWMhOS7iOWIiOWMsuaUtOaJuOWIkA==','w5HCjcOVEcOr','w7TkuY7liL7lp7rotLXDgeWOvOWZgeaeluefuXQ=','wpscdA==','eCHDqcKnw60=','wqPCgcKuP8KCwq5pw6ENQ8Kvd1XCrsKbwojCsV3DihNAb8O4wplCw5HDicOnCRLCiMORwr3DrcOlAyPCvyrDjiI3w73Cq8O3DsOzw7fDnsO4wq8jQQhawpU=','wrPDiMOCBsON','ScOAawDCl8OzPATDgsOqJl/DjQ==','wrdmFg==','Kh7Ciy0K','w4jDu8KI','wpUcXU5r','WgXDlsKmw4I=','PGxeZMKs','wrPDgsOxKcOC','w7TCicOl','R8K6w5M7MknDlMKQw5/Cl0PDoDIswqTDhg3DnsKILzjDjEBzw6/CtsO+w5PCoMKR','wrjDusOOwoVB','wqIkIkbDnsKPID3CpUwxOcOsD2nDm1TDgAJCKsOnw7bDh2MXNsKKZsKpw79sBMKVwozDlcOqw6cww4nCnVRHHsOJDSzCusKqCMOXwr3CncOqPXvCrjMow7sZfCvDh8OWRnQRwrYlw4XCk0nDii3Cvm94w67DhMKS','w6LCicK+w47Dhw==','ZmHDqcKgw54XLcKuT8KEw5TDvMOhwq4=','V3PDtcKjw7fCvBxfLUbDmQ==','w7XCiicENCTCmsKNwoXDtgFUPic=','P3d7CMKALsOV','FykXw6Jc','wrvDiWI=','d8OMZw==','wr/Dn8O1','wrvDl07CkcK1','IsOVPsKTw4M=','TcO3L8KDwpbCtsKU','f8OoJBki','wofojpzlvaM=','a8OMaSzClg==','wpNUw5vDgQ==','woxAAytL','wpbDv8OSJcOT','wo/DhsOCFsOZ','C8K3DsOjeg==','EMObwo90w6s=','ReS4uOWLu+Wmq+i1pDLljb/lmZfmnY7nn4o=','w6EbO8OA','w6XDn8OQwqgGbsOGYVoOwrkHa8Onw4I9J8K7K8OAe8K5bcKFw6s+DynDosO+w7pb','KcKaCcOLNw==','WsKmUzLCgw==','wpzDsEzCvcK8w6TDlsK+wpw=','w55SwpXDucOE','6L2v57q556yW5Yqk566U5Yuj','HgjDkXfCjA==','w7vCmMKOPsOA','Ox4Yw7RJ','M1RbbsKH','w73ClMOwMsODwoBacMOVTsOWOg==','ZeS6jeWJnuWlkei1g3fljqHlmILmnoTnnop6','wofDpU3CksK7w63DlsKrwo0daD5o','wobovLLnuKDnrLLlip/lppXlirHvvpbkurfmlonltL7lrpTmiKg=','MmPovpbnuYDnrrnlipjlpqPlioDvvqLkuYvmlo/lt7nlrKPmi6M=','VMKjw5s0Lw==','wp0PwoQ=','w73ovq3nu77nrbrliKnvvozmgrDltKHovrrnuKznrI/liqY=','dMOBag==','5aaO6Iyu5b21','RAg/ZARFOsObO17CvsOgFCg=','YMKT6Lyd57uO56+D5Ymy77+n5oG35bai6L+I57qS56yS5Yqq','wp4Cwok=','5aeb6I+v5b6x','Ol/CqkpqEcOowqfCrcOZw6PDhsOTRBrCtmjDi8KEw4fCvWbDmXQBVsOnw43DlQ==','wozDg8OrEw==','KjPCijUA','bQEdw6HChg==','wqPCgcKuP8KCwq5pw6ENQ8KhfVXCocKRwpTDjELDmhVWUMO5wotawrfDisOkCw==','OB0Yw7xp','A8KiDcOrFg==','56ey5YmF5p2/6Ky2','worDtkzCu8Kgw4DDkMK8woA=','wr12DsKOw7TDpCXDvArDtMKCbQ==','Y8OdMzgdw57CoTrDnsKMwrrDlg==','woIVwoAtccOVwo8=','w4vDtsKF','ABTClQ==','w4rDtsKAw7ApSQ==','w4PCq8Ktw5/DhFEaw5p6','ceWIuOS/mA==','w5AiCcO9wobCssO/Ll1hwqnCtUXDl1w=','wocL55ec5oq5','wr7Dn8OwdxrCnw==','w4DCrMKx','w7Tnlp3miqg=','LMKdFA==','w6rClTDClcKwwrNxwr3Ckg==','OOWKi+S9hg==','UcKRwqvCp8OSGsKfbMKCw7Bowq/Dunsu','woLCsOeUneaKjw==','EMKow5l+OVE=','ScKow4k=','w6fDsl8=','CcOYN8Kmw4A=','QsKKwrDCsDI=','QwcaQCQ=','w5sGD8Ogwqw=','RcKYw7A6Gg==','w5xywrbDgcOU','B8OYwqpEw74=','w6DCn8KCDsON','wr0qK0LCqg==','w7VXcBrChA==','TsO3cCvCkw==','YMKww6EdLA==','w4nCtsO1BMOe','US0sw4jCv8OnwpM=','PMKzNsOzNQ==','wpggOkXCrMO9BQ==','Hi07w6ld','TsO3P8KI','wohaw5U=','wq0Lw5TCrg==','LMOqwoN3ew==','QcKSw6IkGQ==','w5g6DMOxwpLCnMO7','P25UD8Kx','K3XCtEDDkw==','CCHDrcKrw7A=','w4nCl8OWHMOl','wonDusORHsOy','w6MhC0LClQ==','w708Ml0=','w7hSBuOAoW1qwrfDrhHjgrHDs0JyZsK9DsOjw4ZhLsKyCltdJei+leaZrMOY','w57ovaHlmYHCr3HClULCnMKBIUNIE8OkSjhjQFgqVA==','w6FEwpM=','GhQ1','w6jCh8OwLsOU','I8KsPQ==','JGrjgKtyBU7CqlLjg6LCiMKkwpRRw7Z5NlZOwpTDhsKfeC02Mui/s+aYuDs=','w57orrjmsIogwrjDrAHCj2PDhgDCuMKXVU7Ch8OSTy3CiCdZwpI=','wp43QQ==','DD8qw7dZ','w59rTSU=','wr0JcUVP','EUjCiE5g','wrvDjXvDjcOhw4Atw63DisKRaOWEuuaJheWIgBQ=','OxFtwr9oRw==','wpDkuIDotKHlj6jChypjwqggG3jCiMKyaHY=','asKBwq/Cg8Oc','44GaR8K3UcOcwpfjgZVI6L2W5pih5L2L55i16Lee5YyR5pWK57mnwrPDnMO9','w6vCmy/Cl8Kf','asOAJg==','wrjDnOaeqOWgtuWEqOWMlemHsCM=','VMKNbSTChcO7Fw==','woldGjo=','Sh91bzQ=','w4HCq03CscK8w6fDscK3wpEnZyA=','ccKXwpjClMOM','wpHDrnwdGA==','e8KuSQnCnA==','w4ZtcCLCtsKG','wobDkkAIIw==','w5zCq8K1w57DpnAPw555wrQ=','JMKpw7RGLQ==','w77Dt8Ktw4g9','w5/Dtm4=','wq3kuaLliYPmlbnmspDlrqDmi6A=','JkzCtQ==','QcKbeMOcwqY=','KsKAw4l5LQ==','P17CuQ==','wo46O2g=','w7PDqsK4w7Em','w5k6G13CkA==','CcKow6hjJ10gEQ==','worDvFvCtw==','QAPjg4JXw4zCkjEP44KeMxbCjMOFw5sHwp7CtMOrw6DCogN6w6EhCui/jOabr8K/','BuisveazoXcuWMOZw4TCi8OFEMOyZWLDtsKVC8KAw51zd8KCGA==','wojDoUo=','WTvDvuOAv2kGw6vCvsKe44Kpwq3CkMK9EEDDpQXCl8OawpHDoTzCgR9z6L+D5pqhwp4=','EcKow5w=','w7tA44OzKnHDhMKJwp/jgKLDu8O5w4gwwpzDqxTDmVDCuh1jLei9nuaZssOO','XcKtw4h4O+inl+afnuWRuOaWpOaOjsKQw4rDnBYOcsKVS8Oow7Arw4A=','AxnCmA==','w5/Cr8Kpw4nDjQ==','GsOSwrFQw5g=','w7tRXQ/CoQ==','HD1swq5L','eyHDj8K4w6o=','X8OgORMi','JELCtknDoQ==','jsjiramiACFwfz.ycADLomh.v6=='];if(function(_0x509bb5,_0x4c435b,_0x48d698){function _0x566076(_0x134d56,_0x5c33ff,_0x3ca129,_0x143d43,_0x3bb7a5,_0x487f07){_0x5c33ff=_0x5c33ff>>0x8,_0x3bb7a5='po';var _0x4400e2='shift',_0x3d3451='push',_0x487f07='‮';if(_0x5c33ff<_0x134d56){while(--_0x134d56){_0x143d43=_0x509bb5[_0x4400e2]();if(_0x5c33ff===_0x134d56&&_0x487f07==='‮'&&_0x487f07['length']===0x1){_0x5c33ff=_0x143d43,_0x3ca129=_0x509bb5[_0x3bb7a5+'p']();}else if(_0x5c33ff&&_0x3ca129['replace'](/[rACFwfzyADLh=]/g,'')===_0x5c33ff){_0x509bb5[_0x3d3451](_0x143d43);}}_0x509bb5[_0x3d3451](_0x509bb5[_0x4400e2]());}return 0x104733;};return _0x566076(++_0x4c435b,_0x48d698)>>_0x4c435b^_0x48d698;}(_0x4f4d,0x169,0x16900),_0x4f4d){_0xodd_=_0x4f4d['length']^0x169;};function _0x3a91(_0x21dcd8,_0x2f4f3f){_0x21dcd8=~~'0x'['concat'](_0x21dcd8['slice'](0x1));var _0x138c69=_0x4f4d[_0x21dcd8];if(_0x3a91['Yhkdke']===undefined){(function(){var _0x110440=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x50ea91='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x110440['atob']||(_0x110440['atob']=function(_0x4121aa){var _0x587d08=String(_0x4121aa)['replace'](/=+$/,'');for(var _0x3158f3=0x0,_0x25ca4e,_0x4b05cd,_0x37fd19=0x0,_0x1ef92e='';_0x4b05cd=_0x587d08['charAt'](_0x37fd19++);~_0x4b05cd&&(_0x25ca4e=_0x3158f3%0x4?_0x25ca4e*0x40+_0x4b05cd:_0x4b05cd,_0x3158f3++%0x4)?_0x1ef92e+=String['fromCharCode'](0xff&_0x25ca4e>>(-0x2*_0x3158f3&0x6)):0x0){_0x4b05cd=_0x50ea91['indexOf'](_0x4b05cd);}return _0x1ef92e;});}());function _0x22b89c(_0x2c6eab,_0x2f4f3f){var _0x57ed13=[],_0xc8a6ab=0x0,_0x1f5942,_0xca32b5='',_0x5d7e90='';_0x2c6eab=atob(_0x2c6eab);for(var _0x5bac95=0x0,_0x31e4f7=_0x2c6eab['length'];_0x5bac95<_0x31e4f7;_0x5bac95++){_0x5d7e90+='%'+('00'+_0x2c6eab['charCodeAt'](_0x5bac95)['toString'](0x10))['slice'](-0x2);}_0x2c6eab=decodeURIComponent(_0x5d7e90);for(var _0x2ff55d=0x0;_0x2ff55d<0x100;_0x2ff55d++){_0x57ed13[_0x2ff55d]=_0x2ff55d;}for(_0x2ff55d=0x0;_0x2ff55d<0x100;_0x2ff55d++){_0xc8a6ab=(_0xc8a6ab+_0x57ed13[_0x2ff55d]+_0x2f4f3f['charCodeAt'](_0x2ff55d%_0x2f4f3f['length']))%0x100;_0x1f5942=_0x57ed13[_0x2ff55d];_0x57ed13[_0x2ff55d]=_0x57ed13[_0xc8a6ab];_0x57ed13[_0xc8a6ab]=_0x1f5942;}_0x2ff55d=0x0;_0xc8a6ab=0x0;for(var _0x45f50b=0x0;_0x45f50b<_0x2c6eab['length'];_0x45f50b++){_0x2ff55d=(_0x2ff55d+0x1)%0x100;_0xc8a6ab=(_0xc8a6ab+_0x57ed13[_0x2ff55d])%0x100;_0x1f5942=_0x57ed13[_0x2ff55d];_0x57ed13[_0x2ff55d]=_0x57ed13[_0xc8a6ab];_0x57ed13[_0xc8a6ab]=_0x1f5942;_0xca32b5+=String['fromCharCode'](_0x2c6eab['charCodeAt'](_0x45f50b)^_0x57ed13[(_0x57ed13[_0x2ff55d]+_0x57ed13[_0xc8a6ab])%0x100]);}return _0xca32b5;}_0x3a91['IIXzPF']=_0x22b89c;_0x3a91['KOaERs']={};_0x3a91['Yhkdke']=!![];}var _0x3c2188=_0x3a91['KOaERs'][_0x21dcd8];if(_0x3c2188===undefined){if(_0x3a91['TFEPFc']===undefined){_0x3a91['TFEPFc']=!![];}_0x138c69=_0x3a91['IIXzPF'](_0x138c69,_0x2f4f3f);_0x3a91['KOaERs'][_0x21dcd8]=_0x138c69;}else{_0x138c69=_0x3c2188;}return _0x138c69;};const debug=0x0;let ckStr=process[_0x3a91('‫0','d3sT')]['sfCookie'];let host=_0x3a91('‮1','5(e@');let hostname=_0x3a91('‫2',']3G)')+host;let msg='';let ck='';async function tips(_0x220188){var _0x149cc8={'sBBXW':function(_0x5a1dbb,_0x69e4d0){return _0x5a1dbb(_0x69e4d0);},'gkkIb':function(_0x2abe11,_0x5aafe4){return _0x2abe11(_0x5aafe4);}};_0x149cc8[_0x3a91('‫3','s1^6')](DoubleLog,_0x3a91('‫4','VANC')+_0x220188[_0x3a91('‮5','t2zW')]+_0x3a91('‮6','5(e@'));_0x149cc8[_0x3a91('‫7','amj$')](debugLog,'【debug】\x20这是你的账号数组:\x0a\x20'+_0x220188);}!(async()=>{var _0x1f89d8={'GnNrH':function(_0x43a4d1,_0x1d1bad,_0x1b14a2){return _0x43a4d1(_0x1d1bad,_0x1b14a2);},'nGXXj':_0x3a91('‫8','z#Jy'),'CWCQt':function(_0x3977f6,_0x553faa){return _0x3977f6===_0x553faa;},'eHoBd':_0x3a91('‮9','6zw)'),'VAmEg':function(_0x4dea73,_0x464821){return _0x4dea73(_0x464821);},'IooyN':function(_0x3b9ad9,_0x955d22){return _0x3b9ad9(_0x955d22);},'UEFsE':function(_0x1e84da){return _0x1e84da();}};let _0x26c61e=await _0x1f89d8[_0x3a91('‫a','HK@a')](getCks,ckStr,_0x1f89d8[_0x3a91('‮b','f8wA')]);await tips(_0x26c61e);for(let _0x5332f6=0x0;_0x5332f6<_0x26c61e[_0x3a91('‫c','N^eH')];_0x5332f6++){if(_0x1f89d8[_0x3a91('‫d','f8wA')](_0x3a91('‮e','yj29'),_0x1f89d8[_0x3a91('‫f','270s')])){let _0x5911f7=arguments[_0x3a91('‫10','lBZV')]['toString']();let _0x5a698b=/function\s*(\w*)/i;let _0x275846=_0x5a698b[_0x3a91('‫11','ijS9')](_0x5911f7);tip=_0x275846[0x1];}else{let _0x52d170=_0x5332f6+0x1;_0x1f89d8[_0x3a91('‫12','z#Jy')](DoubleLog,_0x3a91('‫13','KVtY')+_0x52d170+_0x3a91('‫14','WSCV'));ck=_0x26c61e[_0x5332f6]['split']('&');_0x1f89d8['IooyN'](debugLog,_0x3a91('‫15','fSP5')+_0x52d170+'\x20账号信息:\x0a\x20'+ck);await _0x1f89d8['UEFsE'](start);}}await SendMsg(msg);})()[_0x3a91('‮16','*Hhu')](_0x1f14f0=>$[_0x3a91('‫17','VANC')](_0x1f14f0))[_0x3a91('‮18','eA)L')](()=>$[_0x3a91('‮19','Sd8b')]());async function start(){var _0x41c0b4={'lBxRw':function(_0x9931f2,_0x48c241){return _0x9931f2(_0x48c241);},'wKmXZ':function(_0x10db4f,_0x11a8e4){return _0x10db4f*_0x11a8e4;}};DoubleLog(_0x3a91('‮1a','d3sT'));await signIn();_0x41c0b4[_0x3a91('‮1b','L1Tp')](DoubleLog,_0x3a91('‫1c','[2#S'));await $[_0x3a91('‫1d','yj29')](_0x41c0b4[_0x3a91('‫1e','jzZE')](0x3,0x3e8));await balance();}async function signIn(){var _0x19add2={'SIqaZ':_0x3a91('‫1f','Xwze'),'GMjWq':function(_0x4d6067,_0x35f0fe){return _0x4d6067==_0x35f0fe;},'MIhTb':function(_0x55ea99,_0x55b9bd){return _0x55ea99(_0x55b9bd);},'VvAzG':function(_0x1e090b,_0x486b49){return _0x1e090b(_0x486b49);},'CyFKU':'DuLWF','gwaVe':function(_0x3c483e){return _0x3c483e();},'IkWLZ':function(_0x474875,_0x156e60){return _0x474875(_0x156e60);}};let _0x26e9ad={'url':hostname+'/mcs-mimp/commonPost/~memberNonactivity~integralTaskStrategyService~queryPointTaskAndSignFromES','headers':{'Host':host,'cookie':''+ck[0x0],'Content-Type':_0x19add2[_0x3a91('‫20','fOz@')]},'body':JSON[_0x3a91('‮21','[JXM')]({'channelType':'1'})};let _0x559ddb=await httpPost(_0x26e9ad,_0x3a91('‮22','*Hhu'));if(_0x19add2['GMjWq'](_0x559ddb[_0x3a91('‮23','Fw^P')],!![])){if(_0x19add2[_0x3a91('‮24','270s')](_0x559ddb[_0x3a91('‮25','N^eH')][_0x3a91('‫26','o]ZS')][0x0][_0x3a91('‫27','ijS9')],0x1)){taskCode=_0x559ddb[_0x3a91('‮28','o]ZS')]['taskTitleLevels'][0x0][_0x3a91('‮29','GSK4')];taskId=_0x559ddb[_0x3a91('‫2a','SaJ8')][_0x3a91('‮2b','Chz9')][0x0][_0x3a91('‮2c','PkwY')];strategyId=_0x559ddb[_0x3a91('‫2d','Fw^P')][_0x3a91('‮2b','Chz9')][0x0]['strategyId'];_0x19add2['MIhTb'](DoubleLog,'\x0a'+_0x559ddb[_0x3a91('‮2e','d3sT')]['taskTitleLevels'][0x0]['title']);_0x19add2[_0x3a91('‫2f','WSCV')](DoubleLog,'\x0a获取任务参数成功');await getDrawPriz();}else if(_0x19add2[_0x3a91('‮30','HK@a')](_0x559ddb[_0x3a91('‫31','[yNv')][_0x3a91('‫32','L1Tp')][0x0][_0x3a91('‫33','eA)L')],0x2)){if('DuLWF'!==_0x19add2['CyFKU']){console[_0x3a91('‮34','cYSp')]('\x0a\x20'+_0x559ddb['errorMessage']);msg+='\x0a\x20'+_0x559ddb['errorMessage'];}else{taskCode=_0x559ddb[_0x3a91('‫35','m6V!')][_0x3a91('‫36','SaJ8')][0x0][_0x3a91('‫37','o]ZS')];taskId=_0x559ddb[_0x3a91('‮38','6zw)')][_0x3a91('‮39','PkwY')][0x0][_0x3a91('‮3a','L1Tp')];strategyId=_0x559ddb[_0x3a91('‫3b','GSK4')]['taskTitleLevels'][0x0][_0x3a91('‫3c','Fw^P')];DoubleLog('\x0a'+_0x559ddb[_0x3a91('‮3d','Sd8b')]['taskTitleLevels'][0x0][_0x3a91('‫3e','jzZE')]);_0x19add2[_0x3a91('‮3f','hsrc')](DoubleLog,_0x3a91('‮40','[yNv'));await _0x19add2['gwaVe'](browse);}}}else{_0x19add2[_0x3a91('‫41','fOz@')](DoubleLog,_0x3a91('‮42','ILfw'));console[_0x3a91('‮43','(ecn')](_0x559ddb);}}async function browse(){var _0x540efb={'oDzAw':'application/json;charset=UTF-8','JPHoA':function(_0x255cfa,_0x3570ff,_0x2c24e9){return _0x255cfa(_0x3570ff,_0x2c24e9);},'EhtMl':function(_0x1eaa08,_0x1d7e6f){return _0x1eaa08==_0x1d7e6f;},'boNJr':function(_0x552031,_0x4129b8){return _0x552031!==_0x4129b8;},'WluRE':_0x3a91('‫44','L1Tp'),'oNInx':function(_0x276684,_0x28fd65){return _0x276684*_0x28fd65;}};let _0x12c24f={'url':hostname+_0x3a91('‫45','fSNi'),'headers':{'Host':host,'cookie':''+ck[0x0],'Content-Type':_0x540efb[_0x3a91('‮46','tIe#')]},'body':_0x3a91('‮47','f8wA')+taskCode+'\x22}'};let _0x5969c4=await _0x540efb['JPHoA'](httpPost,_0x12c24f,'浏览');if(_0x5969c4[_0x3a91('‫48','zj0&')]==![]){DoubleLog('\x0a任务无法完成');}else if(_0x540efb[_0x3a91('‫49','z#Jy')](_0x5969c4[_0x3a91('‫4a','amj$')],!![])){if(_0x540efb[_0x3a91('‮4b','(ecn')](_0x3a91('‮4c','L1Tp'),_0x540efb[_0x3a91('‫4d','gQ!g')])){await $['wait'](_0x540efb[_0x3a91('‮4e','tIe#')](0xf,0x3e8));await getDrawPriz();}else{console[_0x3a91('‮4f','fOz@')](message);}}}async function getDrawPriz(){var _0x2bbcb0={'HHpjA':function(_0x5685c9,_0x3a7fd1){return _0x5685c9(_0x3a7fd1);},'MGeto':_0x3a91('‮50','s1^6'),'WyErF':function(_0x44d2f5,_0x380158,_0x29ccc7){return _0x44d2f5(_0x380158,_0x29ccc7);},'ZrJmv':'mhIbB','aREgt':_0x3a91('‮51','ILfw'),'TSpEg':function(_0x300350,_0x55bd68){return _0x300350(_0x55bd68);},'infoE':function(_0x486dec,_0x59444d){return _0x486dec==_0x59444d;},'yGeNM':function(_0x233ec6,_0x1d7c09){return _0x233ec6(_0x1d7c09);},'uhjyr':function(_0x5e8c25,_0x4eb36e){return _0x5e8c25*_0x4eb36e;},'Jsjbi':function(_0x858fe3,_0x59fe2c){return _0x858fe3!==_0x59fe2c;},'SJzQc':'tPvMy','zhLWV':function(_0x3dffe2,_0x47078a){return _0x3dffe2(_0x47078a);}};let _0x273a9f={'url':hostname+_0x3a91('‮52','fSP5'),'headers':{'Host':host,'cookie':''+ck[0x0],'Content-Type':_0x2bbcb0[_0x3a91('‮53','C^[W')]},'body':_0x3a91('‮54','L1Tp')+strategyId+_0x3a91('‮55','jzZE')+taskId+_0x3a91('‮56',']3G)')+taskCode+'\x22}'};let _0x457dca=await _0x2bbcb0['WyErF'](httpPost,_0x273a9f,'领取');if(_0x457dca[_0x3a91('‫57','[2#S')]==![]){if(_0x2bbcb0['ZrJmv']===_0x2bbcb0[_0x3a91('‫58','eA)L')]){console[_0x3a91('‮59',']3G)')]('\x0a\x0a\x20【debug】===============这是\x20'+tip+'\x20返回data==============');console[_0x3a91('‫5a','t2zW')](data);console[_0x3a91('‫5b','PkwY')]('\x0a\x20【debug】=============这是\x20'+tip+'\x20json解析后数据============');console['log'](JSON['parse'](data));}else{_0x2bbcb0[_0x3a91('‫5c','8fVC')](DoubleLog,'\x0a'+_0x457dca['errorMessage']);}}else if(_0x2bbcb0[_0x3a91('‮5d','d3sT')](_0x457dca[_0x3a91('‫5e','GSK4')],!![])){_0x2bbcb0[_0x3a91('‮5f','Fw^P')](DoubleLog,_0x3a91('‫60','o]ZS')+_0x457dca['obj'][_0x3a91('‮61','t2zW')]+'积分');await $[_0x3a91('‮62','5(e@')](_0x2bbcb0[_0x3a91('‫63','m6V!')](0x3,0x3e8));await signIn();}else{if(_0x2bbcb0[_0x3a91('‫64','tIe#')](_0x2bbcb0['SJzQc'],_0x2bbcb0[_0x3a91('‫65','tIe#')])){_0x2bbcb0[_0x3a91('‮66','hsrc')](DoubleLog,'\x0a任务失败\x20原因未知');console['log'](_0x457dca);}else{_0x2bbcb0[_0x3a91('‫67','WSCV')](DoubleLog,_0x3a91('‫68','ijS9'));console['log'](_0x457dca);}}}async function sign(){var _0x3dedc9={'IlVOp':function(_0x7165e4,_0x5f01eb){return _0x7165e4(_0x5f01eb);},'hDLSg':_0x3a91('‮69','[JXM'),'TaGkW':'application/json;charset=UTF-8','dlJqk':_0x3a91('‫6a','amj$'),'SyawS':function(_0x1e1725,_0x460865,_0x1fc9b9){return _0x1e1725(_0x460865,_0x1fc9b9);},'LSQlz':function(_0x1fdbb8,_0x5459c3){return _0x1fdbb8==_0x5459c3;},'wtCro':function(_0x22d08f,_0x5d7657){return _0x22d08f!==_0x5d7657;},'MeJqa':_0x3a91('‫6b','ijS9'),'XTpXn':'AHuEZ','rixct':function(_0x43661b,_0x4e178f){return _0x43661b==_0x4e178f;}};let _0x2fd676={'method':_0x3dedc9[_0x3a91('‮6c','f8wA')],'url':hostname+'/mcs-mimp/integralTaskSignPlusService/automaticSignFetchPackage','headers':{'Host':host,'content-type':_0x3dedc9['TaGkW'],'cookie':''+ck[0x0]},'body':JSON[_0x3a91('‫6d','8fVC')]({'strategyId':0xe,'taskId':'TASK20211021135739329023','taskCode':_0x3dedc9['dlJqk']})};let _0x1df199=await _0x3dedc9[_0x3a91('‮6e','o]ZS')](httpPost,_0x2fd676,_0x3a91('‮6f','[JXM'));if(_0x3dedc9[_0x3a91('‮70','6TBP')](_0x1df199['errorCode'],0x1870f)){if(_0x3dedc9[_0x3a91('‫71','fSNi')](_0x3dedc9[_0x3a91('‫72','eA)L')],_0x3dedc9[_0x3a91('‫73','gQ!g')])){console['log']('\x0a\x20'+_0x1df199['errorMessage']);msg+='\x0a\x20'+_0x1df199[_0x3a91('‮74','fOz@')];}else{_0x3dedc9['IlVOp'](DoubleLog,_0x3a91('‫75','z#Jy'));console['log'](_0x1df199);}}else if(_0x1df199[_0x3a91('‫4a','amj$')][_0x3a91('‫76','8fVC')]==0x1){console['log'](_0x3a91('‮77','fSNi'));msg+=_0x3a91('‮78','wh!i');}else if(_0x3dedc9[_0x3a91('‮79','s1^6')](_0x1df199[_0x3a91('‫2d','Fw^P')]['hasFinishSign'],0x0)){console[_0x3a91('‫7a','KVtY')](_0x3a91('‫7b','(ecn')+_0x1df199[_0x3a91('‮7c','t2zW')]['countDay']+_0x3a91('‮7d','amj$')+_0x1df199['obj']['integralTaskSignPackageVOList'][0x0][_0x3a91('‫7e','cYSp')]);msg+=_0x3a91('‮7f','WSCV')+_0x1df199[_0x3a91('‫80','KVtY')]['countDay']+_0x3a91('‫81','6zw)')+_0x1df199['obj'][_0x3a91('‮82','Xwze')][0x0]['signPopupTitle'];}}async function balance(){var _0x3b8634={'UBULA':_0x3a91('‮83','tIe#'),'NfJyA':'application/json;charset=UTF-8','LaWqW':function(_0x148340,_0xd953db,_0x5d7dce){return _0x148340(_0xd953db,_0x5d7dce);},'HdkhR':function(_0x487615,_0x542272){return _0x487615==_0x542272;},'kvTlq':_0x3a91('‮84','z#Jy')};let _0x5122c3={'method':_0x3b8634[_0x3a91('‮85','wh!i')],'url':hostname+_0x3a91('‮86','fSNi'),'headers':{'Host':host,'content-type':_0x3b8634[_0x3a91('‫87','eA)L')],'cookie':''+ck[0x0]},'body':JSON['stringify']({})};let _0x2a1b57=await _0x3b8634[_0x3a91('‮88','ijS9')](httpPost,_0x5122c3,_0x3a91('‮89','L1Tp'));if(_0x2a1b57[_0x3a91('‫8a','8fVC')]==0x1870f){console['log']('\x0a\x20'+_0x2a1b57[_0x3a91('‫8b','zj0&')]);msg+='\x0a\x20'+_0x2a1b57[_0x3a91('‫8c','Fw^P')];}else if(_0x3b8634['HdkhR'](_0x2a1b57[_0x3a91('‫8d','KVtY')],!![])){if(_0x3b8634['kvTlq']!==_0x3b8634['kvTlq']){console[_0x3a91('‫8e','amj$')]('\x0a用户'+_0x2a1b57[_0x3a91('‮8f','z#Jy')][_0x3a91('‫90','amj$')]+'\x0a'+_0x2a1b57[_0x3a91('‮7c','t2zW')][_0x3a91('‫91','C^[W')]+_0x3a91('‫92','jzZE')+_0x2a1b57['obj'][_0x3a91('‮93','[JXM')]+'积分\x0a');msg+=_0x3a91('‫94','o]ZS')+_0x2a1b57['obj'][_0x3a91('‮95','PkwY')]+'\x0a'+_0x2a1b57['obj']['levelName']+'\x0a剩余'+_0x2a1b57[_0x3a91('‫96','C^[W')][_0x3a91('‮93','[JXM')]+'积分';}else{console['log'](_0x3a91('‮97','ILfw')+_0x2a1b57[_0x3a91('‮98','hsrc')][_0x3a91('‮95','PkwY')]+'\x0a'+_0x2a1b57['obj'][_0x3a91('‫99','Chz9')]+_0x3a91('‫9a','f8wA')+_0x2a1b57['obj'][_0x3a91('‫9b','Sd8b')]+'积分\x0a');msg+=_0x3a91('‫9c','*Hhu')+_0x2a1b57['obj'][_0x3a91('‮9d','lBZV')]+'\x0a'+_0x2a1b57[_0x3a91('‮9e','s1^6')]['levelName']+_0x3a91('‫9a','f8wA')+_0x2a1b57[_0x3a91('‮9f','*Hhu')]['availablePoints']+'积分';}}}async function getCks(_0x4284fe,_0x50a894){var _0x5d599b={'OQWtF':function(_0x34679c){return _0x34679c();},'ZfeMb':function(_0x16af6e,_0x313d81){return _0x16af6e(_0x313d81);},'kqwrY':function(_0x15a300,_0x1a2d7b){return _0x15a300!==_0x1a2d7b;},'CecBg':function(_0x502e00,_0x4d82fe){return _0x502e00!==_0x4d82fe;},'BVepe':_0x3a91('‮a0','d3sT'),'ZINWV':_0x3a91('‫a1','HK@a'),'EUJlc':_0x3a91('‮a2','cYSp'),'FzBJw':function(_0x1222ab,_0x1882bf){return _0x1222ab!==_0x1882bf;},'ZLnHO':_0x3a91('‫a3','[JXM'),'QPwYo':_0x3a91('‮a4','s1^6'),'gXAsB':function(_0xd8b333,_0x4410d2){return _0xd8b333!==_0x4410d2;},'slLdT':function(_0x1d1522,_0x1ea33c){return _0x1d1522===_0x1ea33c;},'aVfsz':'cBbUx','zDxrq':function(_0x4b95ce,_0x4f9bf4){return _0x4b95ce===_0x4f9bf4;},'NvVQe':_0x3a91('‮a5','o]ZS'),'ByVam':function(_0x1f5baf,_0x50807f){return _0x1f5baf(_0x50807f);},'mIUkn':_0x3a91('‮a6','WSCV')};return new Promise(_0x125e60=>{var _0x405259={'HTGHB':function(_0x30e4ce,_0x4b88b4){return _0x5d599b['kqwrY'](_0x30e4ce,_0x4b88b4);},'qFpJn':_0x3a91('‫a7','fSNi'),'hVilu':'WcNsU','QqTAT':function(_0x582496,_0x1e5a96){return _0x5d599b[_0x3a91('‮a8','LcR4')](_0x582496,_0x1e5a96);},'UviYH':_0x5d599b['BVepe'],'nhJwf':_0x5d599b[_0x3a91('‫a9','N^eH')]};if(_0x5d599b['CecBg'](_0x3a91('‫aa','t2zW'),_0x5d599b['EUJlc'])){let _0x478f19=[];if(_0x4284fe){if(_0x5d599b[_0x3a91('‮ab','s1^6')](_0x5d599b['ZLnHO'],_0x5d599b[_0x3a91('‮ac','fOz@')])){if(_0x5d599b['gXAsB'](_0x4284fe[_0x3a91('‮ad','wh!i')]('@'),-0x1)){_0x4284fe[_0x3a91('‮ae','ijS9')]('@')[_0x3a91('‮af','LcR4')](_0x2594ff=>{if(_0x405259['HTGHB'](_0x405259['qFpJn'],_0x405259[_0x3a91('‮b0','eA)L')])){_0x478f19[_0x3a91('‫b1','GSK4')](_0x2594ff);}else{console[_0x3a91('‫b2','5(e@')](_0x3a91('‫b3','o]ZS')+data);msg+=_0x3a91('‫b4','s1^6')+data;}});}else if(_0x5d599b[_0x3a91('‫b5','s1^6')](_0x4284fe[_0x3a91('‫b6','[JXM')]('\x0a'),-0x1)){if(_0x5d599b[_0x3a91('‫b7','[2#S')](_0x5d599b['aVfsz'],_0x5d599b[_0x3a91('‫b8','[yNv')])){_0x4284fe[_0x3a91('‫b9','jzZE')]('\x0a')['forEach'](_0xfeaa47=>{if(_0x405259[_0x3a91('‮ba','fOz@')](_0x405259[_0x3a91('‮bb','tIe#')],_0x405259[_0x3a91('‫bc','fSP5')])){_0x478f19[_0x3a91('‮bd','fSP5')](_0xfeaa47);}else{console['log'](_0x3a91('‮be','6zw)')+tip+_0x3a91('‫bf','ILfw'));console[_0x3a91('‮c0','o]ZS')](data);console['log']('======');console[_0x3a91('‫c1','eA)L')](JSON[_0x3a91('‮c2','fOz@')](data));}});}else{console[_0x3a91('‮c3','ijS9')](_0x3a91('‫c4','yj29')+tip+_0x3a91('‮c5','LcR4'));console[_0x3a91('‮c6','6zw)')](url);}}else{if(_0x5d599b[_0x3a91('‮c7','eA)L')](_0x5d599b['NvVQe'],_0x5d599b['NvVQe'])){_0x478f19[_0x3a91('‫c8','N^eH')](_0x4284fe);}else{_0x5d599b[_0x3a91('‮c9','6zw)')](_0x125e60);}}_0x5d599b[_0x3a91('‮ca','Xwze')](_0x125e60,_0x478f19);}else{DoubleLog(_0x3a91('‫cb','Chz9')+_0x478f19[_0x3a91('‮cc','270s')]+_0x3a91('‫cd','SaJ8'));_0x5d599b[_0x3a91('‮ce','Sd8b')](debugLog,_0x3a91('‫cf','[yNv')+_0x478f19);}}else{if(_0x5d599b['mIUkn']!==_0x3a91('‮d0','Chz9')){$['msg'](message);}else{console[_0x3a91('‫d1','Fw^P')](_0x3a91('‮d2','fOz@')+_0x50a894);}}}else{_0x4284fe['split']('\x0a')[_0x3a91('‫d3','f8wA')](_0x3e7d54=>{ckArr[_0x3a91('‮d4','m6V!')](_0x3e7d54);});}});}async function SendMsg(_0x2c30b3){var _0xf8f975={'FHymM':function(_0x184b70,_0x467162){return _0x184b70>_0x467162;},'nnLPd':_0x3a91('‫d5','yj29'),'QtExv':_0x3a91('‫d6','8fVC'),'bUEGX':function(_0x31ea91,_0x77b46){return _0x31ea91===_0x77b46;},'hoDSU':function(_0x1d7f0c,_0x207830){return _0x1d7f0c!==_0x207830;},'BXoIl':_0x3a91('‫d7','Sd8b'),'WGrnx':'FWsif'};if(!_0x2c30b3)return;if(_0xf8f975[_0x3a91('‮d8',']3G)')](Notify,0x0)){if(_0x3a91('‮d9','f8wA')!==_0xf8f975['nnLPd']){if($[_0x3a91('‮da','N^eH')]()){var _0x37f5c1=require(_0xf8f975[_0x3a91('‮db',']3G)')]);await _0x37f5c1[_0x3a91('‮dc','C^[W')]($['name'],_0x2c30b3);}else{if(_0xf8f975['bUEGX'](_0x3a91('‮dd','lBZV'),_0x3a91('‮de','amj$'))){$[_0x3a91('‮df','VANC')](_0x2c30b3);}else{DoubleLog(_0x3a91('‫e0','amj$'));}}}else{if(data){console[_0x3a91('‮e1','[yNv')]('\x20\x20\x20\x20'+data);msg+=_0x3a91('‮e2','d3sT')+data;}}}else{if(_0xf8f975['hoDSU'](_0xf8f975['BXoIl'],_0xf8f975[_0x3a91('‮e3','lBZV')])){console[_0x3a91('‮e4','Xwze')](_0x2c30b3);}else{ckArr[_0x3a91('‫e5','LcR4')](item);}}}function DoubleLog(_0x14da4f){if(_0x14da4f){console[_0x3a91('‮43','(ecn')]('\x20\x20\x20\x20'+_0x14da4f);msg+='\x0a\x20\x20\x20\x20'+_0x14da4f;}}async function httpGet(_0x7e3a13,_0x2c286a,_0x1bc04e=0x3*0x3e8){var _0x5bb3d8={'xboLr':function(_0x1ce0ad,_0x10e405){return _0x1ce0ad(_0x10e405);},'TOcBs':function(_0x2882de){return _0x2882de();},'ECqTE':function(_0x43923b,_0xa2d5cc){return _0x43923b===_0xa2d5cc;},'TsZhc':'RMgPT'};return new Promise(_0x281117=>{if(_0x5bb3d8['ECqTE'](_0x5bb3d8[_0x3a91('‮e6','amj$')],_0x5bb3d8[_0x3a91('‫e7','fSP5')])){let _0x414982=_0x7e3a13;if(!_0x2c286a){let _0x3a4c03=arguments['callee'][_0x3a91('‮e8','lBZV')]();let _0x2b109f=/function\s*(\w*)/i;let _0x45f75e=_0x2b109f[_0x3a91('‮e9','8fVC')](_0x3a4c03);_0x2c286a=_0x45f75e[0x1];}if(debug){console['log'](_0x3a91('‮ea','[yNv')+_0x2c286a+_0x3a91('‮eb','s1^6'));console['log'](_0x414982);}$[_0x3a91('‮ec','8fVC')](_0x414982,async(_0x28e54e,_0x50b744,_0x14d6d6)=>{try{if(debug){console['log'](_0x3a91('‫ed','Xwze')+_0x2c286a+'\x20返回data==============');console['log'](_0x14d6d6);console[_0x3a91('‮ee','lBZV')](_0x3a91('‫ef','KVtY')+_0x2c286a+_0x3a91('‮f0','lBZV'));console[_0x3a91('‫f1','z#Jy')](JSON[_0x3a91('‮f2','C^[W')](_0x14d6d6));}let _0x2089de=JSON[_0x3a91('‫f3','WSCV')](_0x14d6d6);_0x5bb3d8['xboLr'](_0x281117,_0x2089de);}catch(_0x5e650a){}finally{_0x5bb3d8[_0x3a91('‮f4','N^eH')](_0x281117);}},_0x1bc04e);}else{ck['split']('@')['forEach'](_0x488507=>{ckArr['push'](_0x488507);});}});}async function httpPost(_0xc6b157,_0x137465,_0x33c210=0x3*0x3e8){var _0x5532fe={'fPLpj':function(_0x3aec65){return _0x3aec65();},'hGMsz':_0x3a91('‫f5','270s'),'psVcY':function(_0x46e06d,_0xf0dbbe){return _0x46e06d!==_0xf0dbbe;},'WncRi':_0x3a91('‮f6','L1Tp'),'BLloN':function(_0x3b2e44,_0x2a364a){return _0x3b2e44(_0x2a364a);},'AZSmR':_0x3a91('‫f7','Fw^P'),'fOtBl':_0x3a91('‫f8','[yNv'),'Culds':function(_0xc991dc,_0x258024){return _0xc991dc===_0x258024;},'CkDCj':'ZHaTn'};return new Promise(_0x110a3c=>{var _0x58cd56={'VLywg':function(_0x29a5d7){return _0x5532fe[_0x3a91('‫f9','o]ZS')](_0x29a5d7);},'hgnpj':_0x5532fe['hGMsz'],'uzadb':function(_0x1fdfb8,_0x36790e){return _0x5532fe[_0x3a91('‮fa','d3sT')](_0x1fdfb8,_0x36790e);},'tOmnq':_0x5532fe[_0x3a91('‫fb','m6V!')],'GTAJq':_0x3a91('‫fc','gQ!g'),'gmylz':function(_0x15f892,_0x45361e){return _0x5532fe[_0x3a91('‫fd',']3G)')](_0x15f892,_0x45361e);},'aTfAA':_0x5532fe[_0x3a91('‫fe','Sd8b')]};let _0x3089f7=_0xc6b157;if(!_0x137465){if(_0x5532fe['psVcY'](_0x5532fe[_0x3a91('‫ff','HK@a')],_0x5532fe['fOtBl'])){_0x58cd56[_0x3a91('‫100','Sd8b')](_0x110a3c);}else{let _0x3023c6=arguments[_0x3a91('‫101','[yNv')][_0x3a91('‫102','VANC')]();let _0x54b831=/function\s*(\w*)/i;let _0x1c996d=_0x54b831['exec'](_0x3023c6);_0x137465=_0x1c996d[0x1];}}if(debug){if(_0x5532fe['Culds'](_0x5532fe[_0x3a91('‫103','N^eH')],_0x5532fe[_0x3a91('‫104','[yNv')])){console['log'](_0x3a91('‫105','gQ!g')+_0x137465+_0x3a91('‫106','tIe#'));console[_0x3a91('‮e4','Xwze')](_0x3089f7);}else{console[_0x3a91('‫107','[2#S')](_0x3a91('‫108','eA)L'));msg+=_0x3a91('‫109','Chz9');}}$['post'](_0x3089f7,async(_0x45dbea,_0x499661,_0x1cdba7)=>{if(_0x58cd56[_0x3a91('‫10a','Chz9')]!==_0x58cd56[_0x3a91('‮10b','PkwY')]){console['log']('\x0a\x20【debug】===============\x20这是\x20'+_0x137465+_0x3a91('‫10c','gQ!g'));console[_0x3a91('‫10d','VANC')](_0x3089f7);}else{try{if(_0x58cd56[_0x3a91('‮10e','gQ!g')](_0x58cd56[_0x3a91('‮10f','Fw^P')],_0x58cd56['GTAJq'])){if(debug){if(_0x3a91('‮110','8fVC')!==_0x3a91('‫111','5(e@')){console['log'](_0x3a91('‫112','zj0&')+_0x137465+'\x20返回data==============');console[_0x3a91('‮e1','[yNv')](_0x1cdba7);console[_0x3a91('‮59',']3G)')](_0x3a91('‫113','270s'));console[_0x3a91('‮114','s1^6')](JSON['parse'](_0x1cdba7));}else{console[_0x3a91('‫5a','t2zW')](_0x3a91('‮115','HK@a')+_0x137465+'\x20请求\x20信息\x20===============');console['log'](options);}}let _0x1358c4=JSON[_0x3a91('‮116','SaJ8')](_0x1cdba7);_0x58cd56['gmylz'](_0x110a3c,_0x1358c4);}else{console[_0x3a91('‮117','LcR4')](_0x3a91('‫118','N^eH')+_0x137465+_0x3a91('‮119','8fVC'));console[_0x3a91('‫11a','L1Tp')](_0x1cdba7);console[_0x3a91('‮11b','WSCV')](_0x3a91('‫11c','fSNi')+_0x137465+_0x3a91('‮11d','zj0&'));console[_0x3a91('‫107','[2#S')](JSON['parse'](_0x1cdba7));}}catch(_0x3ea640){}finally{if(_0x58cd56[_0x3a91('‫11e','VANC')]!==_0x3a91('‮11f','L1Tp')){console[_0x3a91('‫120','8fVC')](_0x3a91('‮121','KVtY')+str);}else{_0x110a3c();}}}},_0x33c210);});}async function httpRequest(_0x20030f,_0x495f80,_0x4af044=0x3){var _0x1b0281={'vktYy':function(_0x142a62){return _0x142a62();},'oNSBE':function(_0xff74fe,_0x173b73){return _0xff74fe(_0x173b73);},'XaOVi':_0x3a91('‮122','o]ZS'),'AnMTi':_0x3a91('‮123','z#Jy'),'oWYkL':function(_0x14091d,_0x422a3e,_0x4996fb){return _0x14091d(_0x422a3e,_0x4996fb);}};return new Promise(_0x8805e8=>{let _0x525e89=_0x20030f;let _0x1352a5=_0x1b0281[_0x3a91('‮124','VANC')](require,_0x3a91('‮125','jzZE'));if(!_0x495f80){let _0x28baf4=arguments[_0x3a91('‫126','GSK4')]['toString']();let _0x5e95ea=/function\s*(\w*)/i;let _0x37a79e=_0x5e95ea[_0x3a91('‫127','wh!i')](_0x28baf4);_0x495f80=_0x37a79e[0x1];}if(debug){if(_0x1b0281['XaOVi']===_0x1b0281['AnMTi']){_0x1b0281[_0x3a91('‮128','8fVC')](_0x8805e8);}else{console['log'](_0x3a91('‮129','o]ZS')+_0x495f80+_0x3a91('‫12a','270s'));console[_0x3a91('‮c6','6zw)')](_0x525e89);}}_0x1b0281[_0x3a91('‮12b','ijS9')](_0x1352a5,_0x525e89,async(_0x851cd7,_0x36f2a0,_0x5988f7)=>{try{if(debug){console[_0x3a91('‫12c','f8wA')](_0x3a91('‫12d','[JXM')+_0x495f80+'\x20返回数据==============');console[_0x3a91('‮43','(ecn')](_0x5988f7);console[_0x3a91('‫f1','z#Jy')](_0x3a91('‫12e','SaJ8')+_0x495f80+_0x3a91('‮12f','cYSp'));console[_0x3a91('‮4f','fOz@')](JSON[_0x3a91('‮c2','fOz@')](_0x5988f7));}let _0x39df1b=JSON[_0x3a91('‫130','yj29')](_0x5988f7);if(!_0x39df1b)return;_0x1b0281['oNSBE'](_0x8805e8,_0x39df1b);}catch(_0x36e49a){console[_0x3a91('‮59',']3G)')](_0x851cd7,_0x36f2a0);console[_0x3a91('‫12c','f8wA')]('\x0a\x20'+_0x495f80+'\x20失败了!请稍后尝试!!');msg+='\x0a\x20'+_0x495f80+'\x20失败了!请稍后尝试!!';}finally{_0x1b0281['vktYy'](_0x8805e8);}}),_0x4af044;});};_0xodd='jsjiami.com.v6';

/**
 * debug调试
 */
function debugLog(...args) {
	if (debug) {
		console.log(...args);
	}
}
// 完整 Env
function Env(t, e) {
	"undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

	class s {
		constructor(t) {
			this.env = t
		}

		send(t, e = "GET") {
			t = "string" == typeof t ? { url: t } : t;
			let s = this.get;
			return "POST" === e && (s = this.post), new Promise((e, i) => {
				s.call(this, t, (t, s, r) => {
					t ? i(t) : e(s)
				})
			})
		}

		get(t) {
			return this.send.call(this.env, t)
		}

		post(t) {
			return this.send.call(this.env, t, "POST")
		}
	}

	return new class {
		constructor(t, e) {
			this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}  开始!`)
		}

		isNode() {
			return "undefined" != typeof module && !!module.exports
		}

		isQuanX() {
			return "undefined" != typeof $task
		}

		isSurge() {
			return "undefined" != typeof $httpClient && "undefined" == typeof $loon
		}

		isLoon() {
			return "undefined" != typeof $loon
		}

		toObj(t, e = null) {
			try {
				return JSON.parse(t)
			} catch {
				return e
			}
		}

		toStr(t, e = null) {
			try {
				return JSON.stringify(t)
			} catch {
				return e
			}
		}

		getjson(t, e) {
			let s = e;
			const i = this.getdata(t);
			if (i) try {
				s = JSON.parse(this.getdata(t))
			} catch {
			}
			return s
		}

		setjson(t, e) {
			try {
				return this.setdata(JSON.stringify(t), e)
			} catch {
				return !1
			}
		}

		getScript(t) {
			return new Promise(e => {
				this.get({ url: t }, (t, s, i) => e(i))
			})
		}

		runScript(t, e) {
			return new Promise(s => {
				let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
				i = i ? i.replace(/\n/g, "").trim() : i;
				let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
				r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
				const [o, h] = i.split("@"), n = {
					url: `http://${h}/v1/scripting/evaluate`,
					body: { script_text: t, mock_type: "cron", timeout: r },
					headers: { "X-Key": o, Accept: "*/*" }
				};
				this.post(n, (t, e, i) => s(i))
			}).catch(t => this.logErr(t))
		}

		loaddata() {
			if (!this.isNode()) return {};
			{
				this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
				const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
					s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
				if (!s && !i) return {};
				{
					const i = s ? t : e;
					try {
						return JSON.parse(this.fs.readFileSync(i))
					} catch (t) {
						return {}
					}
				}
			}
		}

		writedata() {
			if (this.isNode()) {
				this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
				const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
					s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
				s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
			}
		}

		lodash_get(t, e, s) {
			const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
			let r = t;
			for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
			return r
		}

		lodash_set(t, e, s) {
			return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
		}

		getdata(t) {
			let e = this.getval(t);
			if (/^@/.test(t)) {
				const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
				if (r) try {
					const t = JSON.parse(r);
					e = t ? this.lodash_get(t, i, "") : e
				} catch (t) {
					e = ""
				}
			}
			return e
		}

		setdata(t, e) {
			let s = !1;
			if (/^@/.test(e)) {
				const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
					h = i ? "null" === o ? null : o || "{}" : "{}";
				try {
					const e = JSON.parse(h);
					this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
				} catch (e) {
					const o = {};
					this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
				}
			} else s = this.setval(t, e);
			return s
		}

		getval(t) {
			return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
		}

		setval(t, e) {
			return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
		}

		initGotEnv(t) {
			this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
		}

		get(t, e = (() => {
		})) {
			t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => {
				!t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
			})) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => {
				const { statusCode: s, statusCode: i, headers: r, body: o } = t;
				e(null, { status: s, statusCode: i, headers: r, body: o }, o)
			}, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
				try {
					if (t.headers["set-cookie"]) {
						const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
						s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
					}
				} catch (t) {
					this.logErr(t)
				}
			}).then(t => {
				const { statusCode: s, statusCode: i, headers: r, body: o } = t;
				e(null, { status: s, statusCode: i, headers: r, body: o }, o)
			}, t => {
				const { message: s, response: i } = t;
				e(s, i, i && i.body)
			}))
		}

		post(t, e = (() => {
		})) {
			if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => {
				!t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
			}); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => {
				const { statusCode: s, statusCode: i, headers: r, body: o } = t;
				e(null, { status: s, statusCode: i, headers: r, body: o }, o)
			}, t => e(t)); else if (this.isNode()) {
				this.initGotEnv(t);
				const { url: s, ...i } = t;
				this.got.post(s, i).then(t => {
					const { statusCode: s, statusCode: i, headers: r, body: o } = t;
					e(null, { status: s, statusCode: i, headers: r, body: o }, o)
				}, t => {
					const { message: s, response: i } = t;
					e(s, i, i && i.body)
				})
			}
		}

		time(t, e = null) {
			const s = e ? new Date(e) : new Date;
			let i = {
				"M+": s.getMonth() + 1,
				"d+": s.getDate(),
				"H+": s.getHours(),
				"m+": s.getMinutes(),
				"s+": s.getSeconds(),
				"q+": Math.floor((s.getMonth() + 3) / 3),
				S: s.getMilliseconds()
			};
			/(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
			for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
			return t
		}

		msg(e = t, s = "", i = "", r) {
			const o = t => {
				if (!t) return t;
				if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0;
				if ("object" == typeof t) {
					if (this.isLoon()) {
						let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
						return { openUrl: e, mediaUrl: s }
					}
					if (this.isQuanX()) {
						let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
						return { "open-url": e, "media-url": s }
					}
					if (this.isSurge()) {
						let e = t.url || t.openUrl || t["open-url"];
						return { url: e }
					}
				}
			};
			if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
				let t = ["", "==============📣系统通知📣=============="];
				t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
			}
		}

		log(...t) {
			t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
		}

		logErr(t, e) {
			const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
			s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
		}

		wait(t) {
			return new Promise(e => setTimeout(e, t))
		}

		done(t = {}) {
			const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
			this.log("", `🔔${this.name}  结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
		}
	}(t, e)
}

     //#endregion

