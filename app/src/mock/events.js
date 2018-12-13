const event = {
  "data": [
    {
      "id": 1,
      "start_date": "2018-09-21 22:00:00",
      "end_date": "2018-09-22 12:00:01",
      "name": "Workshop da Sympla",
      "detail": "<b>Ola esse é um evento da Sympla</b><br><h1>Sejam todos bem-vindo</h1>",
      "private_event": true,
      "published": true,
      "cancelled": false,
      "image": "https://www.sympla.com.br/images/public/logo-sympla-new-blue@3x.png",
      "url": "https://www.sympla.com.br/festa-800__332504",
      "address": {
        "name": "Loja Contempo",
        "address": "Rua Fernandes Tourinho",
        "address_num": "AB45ER78",
        "address_alt": "10º Andar",
        "neighborhood": "Funcionários",
        "city": "Belo Horizonte",
        "state": "MG",
        "zip_code": "31112-000",
        "country": "BR"
      },
      "host": {
        "name": "Sympla Eventos",
        "description": "Área responsável pela organização de eventos da empresa Sympla"
      },
      "category_prim": {
        "name": "encontro-networking"
      },
      "category_sec": {
        "name": "encontro-festa"
      }
    }
  ],
  "sort": {
    "field_sort": "id",
    "sort": "ASC"
  },
  "pagination": {
    "has_next": true,
    "has_prev": false,
    "quantity": 10,
    "offset": 1,
    "page": 1,
    "page_size": 100,
    "total_page": 2
  }
}
const order = {
  "data": [
    {
      "id": "Q080KEE",
      "event_id": 10203040,
      "order_date": "2018-10-21 10:12:23",
      "order_status": "A",
      "updated_date": "2018-10-10 23:34:21",
      "discount_code": "10,00% - desconto10",
      "transaction_type": "CREDIT_CARD",
      "order_total_sale_price": 23.34,
      "buyer_first_name": "Joaquim",
      "buyer_last_name": "Lopes",
      "buyer_email": "meuemail@sympla.com.br",
      "invoice_info": {
        "doc_type": "CPF",
        "doc_number": "142.536.789-55",
        "client_name": "Joaquim",
        "address_zip_code": "31112-000",
        "address_street": "Rua Fernandes Tourinho",
        "address_street_number": "147",
        "address_street2": "10º Andar",
        "address_neighborhood": "Funcionários",
        "address_city": "Belo Horizonte",
        "address_state": "MG",
        "mei": false
      }
    }
  ],
  "sort": {
    "field_sort": "id",
    "sort": "ASC"
  },
  "pagination": {
    "has_next": true,
    "has_prev": false,
    "quantity": 10,
    "offset": 1,
    "page": 1,
    "page_size": 100,
    "total_page": 2
  }
} 
const participant = {
  "data": [
    {
      "id": 102345,
      "order_id": "BC1BA1",
      "first_name": "Joaquim",
      "last_name": "Lopes",
      "email": "meuemail@sympla.com.br",
      "ticket_number": "QHWA-1Q-3G0J",
      "ticket_num_qr_code": "QHWA1Q3G0J",
      "ticket_name": "VIP",
      "pdv_user": "meuemail@sympla.com.br",
      "ticket_sale_price": 123.5,
      "checkin": {
        "id": 1,
        "check_in": true,
        "check_in_date": "2018-09-10T10:21:10-03:00"
      },
      "custom_form": {
        "id": 1,
        "name": "CPF",
        "value": "142.536.789-55"
      }
    }
  ],
  "sort": {
    "field_sort": "id",
    "sort": "ASC"
  },
  "pagination": {
    "has_next": true,
    "has_prev": false,
    "quantity": 10,
    "offset": 1,
    "page": 1,
    "page_size": 100,
    "total_page": 2
  }
}
module.exports = {event, order, participant}