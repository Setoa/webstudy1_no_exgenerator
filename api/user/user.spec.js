const should=require('should');
const request=require('supertest');
const models=require('../../model');
const syncDatabase=require('../../bin/sync-database');
const app=require('../../app');

describe('GET /users',()=>{
    before('sync database',(done)=>{
        syncDatabase().then(()=>{
            done();
        });
    });
    const users=[
        {name:'alice'},
        {name:'bek'},
        {name:'chris'}
    ];
    before('insert 3 users into database',(done)=>{
        models.User.bulkCreate(users).then(()=>done());
    });
    it('should return 200 status code',(done)=>{
        request(app).get('/users').expect(200).end((err,res)=>{
            if(err) throw err;
            done();
        })
    });
    it('should return array',(done)=>{
        request(app).get('/users').expect(200).end((err,res)=>{
            if(err) throw err;
            res.body.should.be.an.instanceof(Array).and.have.length(3);
            res.body.map(user=>{
                user.should.have.properties('id','name');
                user.id.should.be.a.Number();
                user.name.should.be.a.String();
            });
            done();
        });
    });
    after('clean up database',(done)=>{
        syncDatabase().then(()=>done());
    });
});

describe('PUT /users/:id',()=>{
    it.only('should return 200 status code',(done)=>{
        request(app)
            .put('/users/1')
            .send({
                name:'foo'
            })
            .end((err,res)=>{
                if(err) throw err;
                done();
            });
    });
});