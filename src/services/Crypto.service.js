import http from "./http-common.js";

class CryptoService {

	getUserPublicKey(username) {
		return http.get("cypto/publicKey");
	}
}
export default new CryptoService();