npx create-nx-workspace purple --preset=nest
nx show projects
nx run account:serve
nx run account:test
nx run account:build
nx run account:build:production


nx g @nrwl/nest:lib interfaces
nx g module apps/user  --project=account