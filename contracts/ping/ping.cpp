// Minimal contract for the owned CDT pin.
// Not a deployment. Account name ping is a placeholder.

#include <eosio/eosio.hpp>

using namespace eosio;

CONTRACT ping : public contract {
 public:
  using contract::contract;

  ACTION hi(name user) {
    require_auth(user);
  }
};
