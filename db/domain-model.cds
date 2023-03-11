entity People {
    key ID        : UUID;
        isLead    : Boolean;
        manager   : Association to People;
        members   : Association to many People
                        on manager = $self;
        company   : String;
        title     : String;
        firstname : String;
        email : String;
        lastname  : String;
        picture   : LargeBinary @Core.MediaType: 'image/png';
}
