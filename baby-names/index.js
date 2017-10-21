var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://mhaviv@localhost:5432/baby_names_development');

var babyProfile = sequelize.define('profile', {
	firstName: Sequelize.STRING, 
	lastName: Sequelize.STRING,
	bio: Sequelize.TEXT
});

var babyAsset = sequelize.define('asset', {
	location: Sequelize.STRING,
	type: Sequelize.STRING,
	notes: Sequelize.TEXT
});

var babyToy = sequelize.define('toy', {
	name: Sequelize.STRING,
	notes: Sequelize.TEXT
});

babyProfile.sync()
		   .then(function(){
		   	babyProfile.create({
		   		firstName: 'Sara',
		   		lastName: 'Eckhaus',
		   		bio: 'bubloons!'
		   	})
})

babyAsset.sync()
		   .then(function(){
		   	babyAsset.create({
		   		location: 'Brooklyn',
		   		type: 'foam baloons',
		   		notes: 'mushy & squishy!'
		   	})
})

babyToy.sync()
		   .then(function(){
		   	babyToy.create({
		   		name: 'Barbie Dolls',
		   		notes: 'Sara always took the pretty barbie and gave the cancerous looking one to Nechama Shochet'
		   	})
})

module.exports = {
	sequelize,
	babyProfile,
	babyAsset,
	babyToy
}



