function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'app/views/skills/member.html',
        controller: 'SkillsMemberCtrl',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}