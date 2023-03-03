using { People } from '../db/domain-model';

service UserService {
    entity Us as projection on People;
}
