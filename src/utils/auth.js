const useAuth = () => {
	const authData = localStorage.getItem("token");

	if (!authData) {
		return null;
	} else {
		return JSON.parse(authData);
	}
};

module.exports = useAuth;
