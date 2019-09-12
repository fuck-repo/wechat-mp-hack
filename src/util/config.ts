import { existsSync, mkdir } from 'fs';
import { join } from 'path';

const HOST = 'mp.weixin.qq.com';
const BASEURL = `https://${HOST}`;

const API = {
  home: `${BASEURL}/cgi-bin/home`,
  masssendpage: `${BASEURL}/cgi-bin/masssendpage`,
  bizlogin: `${BASEURL}/cgi-bin/bizlogin`,
  loginqrcode: `${BASEURL}/cgi-bin/loginqrcode`,
  operate_appmsg: `${BASEURL}/cgi-bin/operate_appmsg`,
  appmsg: `${BASEURL}/cgi-bin/appmsg`,
  filetransfer: `${BASEURL}/cgi-bin/filetransfer`,
  filepage: `${BASEURL}/cgi-bin/filepage`,
  masssend: `${BASEURL}/cgi-bin/masssend`,
  safeassistant: `${BASEURL}/misc/safeassistant`,
  safeqrconnect: `${BASEURL}/safe/safeqrconnect`,
  safeqrcode: `${BASEURL}/safe/safeqrcode`,
  safeuuid: `${BASEURL}/safe/safeuuid`,
  singlesend: `${BASEURL}/cgi-bin/singlesend`,
  message: `${BASEURL}/cgi-bin/message`,
  uploadimg2cdn: `${BASEURL}/cgi-bin/uploadimg2cdn`,
  verifycode: `${BASEURL}/cgi-bin/verifycode`,
  userlist: `${BASEURL}/cgi-bin/user_tag`,
};

const Config = {
  host: HOST,
  baseurl: BASEURL,
  api: API,
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36',
  upload: join(process.cwd(), 'upload'),
};

if (!existsSync(Config.upload)) {
  mkdir(Config.upload, () => {});
}

export default Config;
